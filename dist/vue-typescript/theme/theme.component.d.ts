import { Vue } from "../vue";
export declare class ThemeComponent extends Vue {
    /**
     * Name of the theme to apply.
     * If the theme doesn't exist yet, the component will update automatically when it becomes available.
     */
    name: string | null;
    private themeInUse;
    private unsubscribe;
    render(context: any): any;
    private onNameChange;
}
