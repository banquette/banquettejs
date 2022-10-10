/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-arrow-back-ios-new',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '6.41 2.51 10.84 18.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77z"},[])]); }
return h('svg',{"viewBox":c ? '6 2 11.77 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"},[])]);
    }
};

export { script as default };
