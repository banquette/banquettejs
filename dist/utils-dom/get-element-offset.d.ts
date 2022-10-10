/**
 * Get the x,y coordinates of an element.
 *
 * If `absolute` is `true`, the position is relative to the document.
 * If `absolute` is `false`, the position is relative to the first relative/absolute parent.
 */
export declare function getElementOffset(target: any, absolute?: boolean): {
    top: number;
    left: number;
};
