import { HeadlessFormViewDataInterface } from "@banquette/ui/form/form/headless-form-view-data.interface";

export interface FormViewDataInterface extends HeadlessFormViewDataInterface {
    /**
     * A bit of magic /trickery here.
     *
     * Because neither the FormObject nor the model instance is exposed to Vue (on purpose, for performances considerations and separation of concerns),
     * the mutations of the structure of the form are not detected.
     *
     * This means that if you add or remove a control from the form the view will not update.
     *
     * This doesn't happen with the states and values because these properties are part of the view data.
     * But we don't want to include the form itself in the view data.
     *
     * So the solution here is to increment this "__version" attribute each time a control is added or removed.
     * Because the value is used in the view, VueJS will trigger a refresh.
     *
     * To use the value without anything being visible, this is done in the template:
     * :data-version="v.__version < 0 ? '' : null"
     *
     * Because the version is never < 0, the attribute will never appear.
     * But Vue doesn't see this, all it can see it that the value has changed and the view accessed the value on the last render.
     *
     * We could also do a $forceUpdate(), but this seems cleaner because it uses the tracking system of Vue,
     * so it may not invalidate certain things that $forceUpdate() may.
     *
     * This solution is still opened to discussion. If you have a better idea.
     */
    __version: number;
}
