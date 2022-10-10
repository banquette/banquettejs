import { VarHolder } from "@banquette/utils-misc/var-holder";
export declare class Constants extends VarHolder {
    private static Instance;
    /**
     * Get the value of a constant.
     */
    static Get(name: string): any;
    /**
     * Register a constant.
     */
    static Register(name: string, value: any): void;
    /**
     * Get (and create if necessary) the singleton instance.
     */
    private static GetInstance;
}
