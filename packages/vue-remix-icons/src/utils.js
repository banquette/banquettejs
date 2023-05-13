let g = typeof(window) !== 'undefined' ? window : global;
g.__bt_icons__ = g.__bt_icons__ || {};
g.__bt_icons__.remix = g.__bt_icons__.remix || {};
export function r(name, icon) {
    return g.__bt_icons__.remix[name] = icon;
}
