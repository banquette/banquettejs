/**
 * Get the x,y coordinates of an element.
 *
 * If `absolute` is `true`, the position is relative to the document.
 * If `absolute` is `false`, the position is relative to the first relative/absolute parent.
 */
export function getElementOffset(target: any, absolute: boolean = true) {
    let x = 0, y = 0;
    while (target && !isNaN(target.offsetLeft) && !isNaN(target.offsetTop)) {
        x += target.offsetLeft - target.scrollLeft;
        y += target.offsetTop - target.scrollTop;
        target = target.offsetParent;
        if (target && !absolute) {
            const position = window.getComputedStyle(target).getPropertyValue('position');
            if (position === 'relative' || position === 'absolute') {
                break;
            }
        }
    }
    return {top: y, left: x};
}
