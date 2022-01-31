import { VTest } from "./v-test";
import { VueWrapper } from "@vue/test-utils";
import { ComponentPublicInstance } from "vue";

export interface ControlViewTestInterface<T = unknown> {
    /**
     * A name for the test.
     */
    name: string;

    /**
     * An optional description explaining what the test does.
     */
    description?: string;

    /**
     * The props to set when mounting the component.
     */
    props?: Record<string, any>;

    /**
     * View data override.
     */
    v: Partial<VTest & T>;

    /**
     * Callback that will be called once the component is mounted.
     * Here are performed all the checks.
     */
    check?: <T extends ComponentPublicInstance>(wrapper: VueWrapper<T>) => void;

    /**
     * Used by the visual inspection, to tell that the view state has been checked.
     */
    valid?: boolean;
}
