import { HeadlessControlViewDataInterface } from "../headless-control-view-data.interface";
import { Choice } from "./choice";
import { ChoicesRemoteFetchStatus } from "./constant";

/**
 * Data exposed to the view by the headless select view model.
 */
export interface HeadlessSelectViewDataInterface extends HeadlessControlViewDataInterface {
    /**
     * Array of ungrouped available choices.
     */
    choices: Record<string, {grouped: Record<string, Choice[]>, standalone: Choice[]}>;

    /**
     * Number of Choice with a `selected` flag to `true`.
     */
    selectedChoicesCount: number;

    /**
     * Number of choices visible to the end user.
     */
    visibleChoicesCount: number;

    /**
     * `true` if the dropdown of available choices is visible.
     */
    choicesVisible: boolean;

    /**
     * If `true`, multiple choices can be selected at once.
     */
    multiple: boolean;

    /**
     * Minimum number of characters expected for the search.
     */
    searchMinLength: number;

    /**
     * The current value of the filter string.
     */
    searchBuffer: string;

    /**
     * The current value of the new item on creation.
     */
    creationBuffer: string;

    /**
     * Status of the remote fetching.
     */
    remoteFetchStatus: ChoicesRemoteFetchStatus;

    /**
     * Contains the error message given by the remote module in case a remote fetch has failed.
     */
    remoteFetchError: string|null;
}
