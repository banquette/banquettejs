let g = typeof(window) !== 'undefined' ? window : global;
g.__bt_icons__ = g.__bt_icons__ || {};
g.__bt_icons__.material = g.__bt_icons__.material || {};
export function r(name, icon) {
    return g.__bt_icons__.material[name] = icon;
}
