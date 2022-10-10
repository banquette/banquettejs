import { Vue } from "@banquette/vue-typescript/vue";
export default class TagComponent extends Vue {
    /**
     * The URL to redirect to when the tag is clicked.
     * If defined, the root component will be a `<a>` instead of a `<span>`.
     */
    href: string | null;
    /**
     * Define the "target" attribute of the root element.
     * Only applicable if `href` is defined and thus the root element is a `<a>`.
     */
    target: string | null;
    /**
     * If `true`, a close icon is added that emits a `close` event when clicked.
     */
    closable: boolean;
    get tagName(): string;
    close(): void;
}
