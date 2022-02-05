import { Injector } from "@banquette/dependency-injection/injector";
import { proxy } from "@banquette/utils-misc/proxy";
import { ChoicesSearchModule } from "../module/choices-search/choices-search.module";
import { SearchType } from "../module/choices-search/constant";
import { FocusChangedEvent } from "../module/choices-search/event/focus-changed.event";
import { SearchChangedEvent } from "../module/choices-search/event/search-changed.event";
import { ChoiceOrigin } from "../module/choices/constant";
import { ChoicesChangedEvent } from "../module/choices/event/choices-changed.event";
import { AbstractChoiceViewModel } from "./abstract-choice.view-model";

/**
 * The view model logic behind a generic select form control.
 */
export class SelectViewModel extends AbstractChoiceViewModel {
    /**
     * The label of the select field as a whole.
     */
    public label: string|null = null;

    /**
     * Text to show on the select if no value is selected.
     */
    public placeholder: string|null = null;

    /**
     * An optional help text to show to the user.
     */
    public help: string|null = null;

    /**
     * If `true` the label will float and take the place of the placeholder when possible.
     */
    public floatingLabel: boolean = true;

    /**
     * Modules.
     */
    public search = Injector.Get(ChoicesSearchModule);

    /**
     * @inheritDoc
     */
    public initialize(): Promise<void> {
        this.unsubscribeFunctions.push(this.choices.onChoicesChanged((event: ChoicesChangedEvent) => {
            event.choices = this.search.filterChoices(event.choices);
        }));
        this.unsubscribeFunctions.push(this.search.onSearchChange(proxy(this.onSearchChanged, this)));
        this.unsubscribeFunctions.push(this.search.onFocusChanged(proxy(this.onSearchFocusChanged, this)));
        return super.initialize();
    }

    /**
     * Try to fetch remote choices if available.
     */
    public fetchRemoteChoices(): Promise<any>|false {
        if (!this.search.isApplicable) {
            this.choices.removeAll(ChoiceOrigin.Remote);
            return false;
        }
        return super.fetchRemoteChoices(this.search.urlParameters);
    }

    /**
     * To call when a keydown event is emitted for the component.
     */
    public onKeyDown(event: KeyboardEvent): void {
        this.choices.onKeyDown(event);
        this.search.onKeyDown(event);
    }

    /**
     * @inheritDoc
     */
    public onFocus() {
        super.onFocus();
        if (!this.disabled) {
            this.choices.show();
        }
    }

    /**
     * @inheritDoc
     */
    public onBlur() {
        super.onBlur();
        this.choices.hide();
    }

    /**
     * Called when the search string has changed.
     */
    private onSearchChanged(event: SearchChangedEvent): void {
        if (event.type === SearchType.Remote) {
            const result = this.fetchRemoteChoices();
            if (result !== false) {
                result.then((choices: any[]) => {
                    this.choices.set(choices, ChoiceOrigin.Remote);
                    for (const choice of this.choices.items) {
                        choice.selectionFrozen = true;
                    }
                });
            }
        } else {
            this.choices.set(([] as any[]).concat(this.search.filterChoices(this.choices.items)), null);
        }
    }

    /**
     * Called when the search module wants to change the `focused` state of an item.
     */
    private onSearchFocusChanged(event: FocusChangedEvent): void {
        if (event.focused) {
            this.choices.focus(event.choice);
        } else {
            this.choices.unfocus(event.choice);
        }
    }
}
