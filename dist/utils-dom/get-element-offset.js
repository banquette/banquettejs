/*!
 * Banquette UtilsDom v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Get the x,y coordinates of an element.
 *
 * If `absolute` is `true`, the position is relative to the document.
 * If `absolute` is `false`, the position is relative to the first relative/absolute parent.
 */
function getElementOffset(target, absolute) {
    if (absolute === void 0) { absolute = true; }
    var x = 0, y = 0;
    while (target && !isNaN(target.offsetLeft) && !isNaN(target.offsetTop)) {
        x += target.offsetLeft - target.scrollLeft;
        y += target.offsetTop - target.scrollTop;
        target = target.offsetParent;
        if (target && !absolute) {
            var position = window.getComputedStyle(target).getPropertyValue('position');
            if (position === 'relative' || position === 'absolute') {
                break;
            }
        }
    }
    return { top: y, left: x };
}

export { getElementOffset };
