/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-signal-wifi-statusbar-connected-no-internet-3',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor';this.version;var c = this.crop !== undefined;
        return h('svg',{"viewBox":c ? '0 4 22.92 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 9V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l2.82 2.82A12.93 12.93 0 0 1 12 8c1.77 0 3.46.36 5 1z","fill-opacity":"0.3"},[]),h('path',{d:"M2.82 11.8 12 21l5-5.01V9c-1.54-.64-3.23-1-5-1-3.59 0-6.83 1.45-9.18 3.8zM19 18h2v2h-2zm0-8h2v6h-2z"},[])]);
    }
};

export { script as default };