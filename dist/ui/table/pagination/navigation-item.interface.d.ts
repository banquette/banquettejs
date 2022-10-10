export interface NavigationItemInterface {
    /**
     * The type of element.
     *
     *  - link: refers to a simple page link
     *  - input: refers to an input text the user can use to specify a page number manually (only available for high number of pages).
     */
    type: 'link' | 'input';
    /**
     * The text of the link or default content of the input.
     */
    text: string;
    /**
     * The page number to go to (only apply to type "link").
     */
    page?: number;
    /**
     * Is this item the current page?
     */
    current: boolean;
}
