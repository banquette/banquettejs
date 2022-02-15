import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { FormControl } from "@banquette/form/form-control";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { SearchType, ChoicesSearchEvents } from "./constant";
import { FocusChangedEvent } from "./event/focus-changed.event";
import { SearchChangedEvent } from "./event/search-changed.event";
import { Choice } from "../choices/choice";

@Module()
export class ChoicesSearchModule {
    /**
     * Define the filtering/fetching strategy of choices.
     * @see SearchType
     */
    public type: SearchType|null = null;

    /**
     * Name of the url parameter to use to send the text of the search to the server.
     * In an array is given, multiple parameters will be created with the user's search text as value.
     *
     * This parameter is REQUIRED when the searchType is "remote" and unused in other cases.
     */
    public remoteParamName: string|string[] = 'search';

    /**
     * Minimum number of characters the search must contain before remote filtering is done.
     * This parameter is only used when the searchType is "remote".
     */
    public minLength: number = 0;

    /**
     * Duration without any user input to wait to empty the virtual buffer.
     */
    public virtualBufferClearDelay: number = 2000;

    /**
     * The form control used to get the search input from the user
     * in case of a explicit search (so remote or local).
     */
    public control = new FormControl<string>();

    /**
     * Array of choices that are still selected while not being part of the available choices anymore.
     */
    public invisibleSelectedItems: Choice[] = [];

    /**
     * The virtual buffer is only filled when the search type is `SearchType.Implicit` and is used
     * to temporarily store what the user type to put the focus on the first matching item.
     *
     * The buffer is automatically emptied after `virtualBufferClearDelay` milliseconds of inactivity (or never if 0).
     */
    public virtualBuffer: string = '';
    private virtualBufferClearTimerId: number|null = null;

    /**
     * `true` if the search type is `SearchType.Remote`.
     */
    public get isRemote(): boolean {
        return this.type === SearchType.Remote;
    }

    /**
     * `true` if the search type is `SearchType.Local`.
     */
    public get isLocalRemote(): boolean {
        return this.type === SearchType.Local;
    }

    /**
     * `true` if the search type is `SearchType.Implicit`.
     */
    public get isImplicit(): boolean {
        return this.type === SearchType.Implicit;
    }

    /**
     * `true` if the permanent search text input should be visible.
     */
    public get isControlVisible(): boolean {
        return this.type === SearchType.Remote || this.type === SearchType.Local;
    }

    /**
     * `true` if the current context allows for filtering.
     */
    public get isApplicable(): boolean {
        return this.type !== SearchType.Remote || (!!this.control.value && this.control.value.length >= this.minLength);
    }

    /**
     * Get the number of chars left to type for the remote search to fire.
     */
    public get minCharsLeft(): number {
        return this.type === SearchType.Remote && this.control.value ? Math.max(0, this.minLength - this.control.value.length) : 0;
    }

    /**
     * Url parameters object for the type `SearchType.Remote`.
     */
    public get urlParameters(): Record<string, string> {
        const output: Record<string, string> = {};
        if (this.type === SearchType.Remote) {
            const paramsNames = ensureArray(this.remoteParamName);
            for (const paramName of paramsNames) {
                output[paramName] = this.control.value;
            }
        }
        return output;
    }

    /**
     * For communication with the outside.
     */
    private eventDispatcher = new EventDispatcher();

    public constructor() {
        this.control.onValueChanged((event: ValueChangedFormEvent) => {
            if (this.type !== null) {
                this.eventDispatcher.dispatch(ChoicesSearchEvents.SearchChanged, new SearchChangedEvent(this.type, event.newValue));
            }
        });
    }

    /**
     * A function that will be called when a new search is ready to be made.
     */
    public onSearchChange(cb: (event: SearchChangedEvent) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ChoicesSearchEvents.SearchChanged, cb);
    }

    /**
     * A function that will be called when the search module wants to change the `focused` state of an item.
     */
    public onFocusChanged(cb: (event: FocusChangedEvent) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ChoicesSearchEvents.FocusChanged, cb);
    }

    /**
     * Apply the current filters to a list of Choice.
     */
    public filterChoices(choices: Choice[]): Choice[] {
        if (this.type === SearchType.Local) {
            return this.filterChoicesLocal(choices);
        } else if (this.type === SearchType.Implicit) {
            return this.filterChoicesImplicit(choices);
        }
        return choices;
    }

    /**
     * To call when a keydown event is emitted for the component.
     */
    public onKeyDown(event: KeyboardEvent): void {
        if ((event.key.length !== 1 && event.key !== 'Backspace') || this.type !== SearchType.Implicit) {
            return ;
        }
        if (event.key === 'Backspace') {
            this.virtualBuffer = this.virtualBuffer.slice(0, -1);
        } else {
            this.virtualBuffer += event.key;
        }
        if (this.virtualBufferClearDelay > 0) {
            if (this.virtualBufferClearTimerId !== null) {
                window.clearTimeout(this.virtualBufferClearTimerId);
            }
            this.virtualBufferClearTimerId = window.setTimeout(() => {
                this.virtualBuffer = '';
            }, this.virtualBufferClearDelay);
        }
        this.eventDispatcher.dispatch(ChoicesSearchEvents.SearchChanged, new SearchChangedEvent(this.type, this.virtualBuffer));
        event.preventDefault();
        event.stopPropagation();
    }

    /**
     * Filtering function for the type `SearchType.Local`.
     */
    private filterChoicesLocal(choices: Choice[]): Choice[] {
        const loweredBuffer = this.control.value.toLowerCase();
        for (const choice of choices) {
            choice.visible = !loweredBuffer.length || choice.label.toLowerCase().includes(loweredBuffer);
        }
        return choices;
    }

    /**
     * Filtering function for the type `SearchType.Implicit`.
     */
    private filterChoicesImplicit(choices: Choice[]): Choice[] {
        let found = false;
        const loweredBuffer = this.virtualBuffer.toLowerCase();
        for (const choice of choices) {
            if (!found && loweredBuffer.length && choice.label.toLowerCase().substring(0, loweredBuffer.length) === loweredBuffer) {
                found = true;
                this.eventDispatcher.dispatch(ChoicesSearchEvents.FocusChanged, new FocusChangedEvent(choice, true));
            } else if (choice.focused) {
                this.eventDispatcher.dispatch(ChoicesSearchEvents.FocusChanged, new FocusChangedEvent(choice, false));
            }
        }
        return choices;
    }
}
