/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-settings-bluetooth',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '5.41 0 11.88 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"23",r:"1"},[]),h('circle',{"cx":"8","cy":"23",r:"1"},[]),h('circle',{"cx":"16","cy":"23",r:"1"},[]),h('path',{d:"M13.41 10 17 6.42c.39-.39.39-1.02 0-1.42L12.21.21a.705.705 0 0 0-.5-.21c-.39 0-.71.32-.71.71v6.88L7.11 3.71A.996.996 0 1 0 5.7 5.12L10.59 10 5.7 14.89a.996.996 0 1 0 1.41 1.41L11 12.41v6.88c0 .39.32.71.71.71.19 0 .37-.07.5-.21L17 15c.39-.39.39-1.02 0-1.42L13.41 10zM13 3.83l1.88 1.88L13 7.59V3.83zm0 12.34v-3.76l1.88 1.88L13 16.17z"},[])]); }
return h('svg',{"viewBox":c ? '5 0 12.71 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"},[])]);
    }
};

export { script as default };
