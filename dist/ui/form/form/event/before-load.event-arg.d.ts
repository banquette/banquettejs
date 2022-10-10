import { EventArg } from "@banquette/event/event-arg";
import { HeadlessFormViewModel } from "../headless-form-view.model";
export declare class BeforeLoadEventArg extends EventArg {
    readonly vm: HeadlessFormViewModel;
    constructor(vm: HeadlessFormViewModel);
}
