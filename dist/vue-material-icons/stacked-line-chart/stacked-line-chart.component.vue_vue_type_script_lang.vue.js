/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-stacked-line-chart',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2.41 2.96 19.21 18.11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m2.79 14.78-.09-.09a.996.996 0 0 1 0-1.41l6.09-6.1a.996.996 0 0 1 1.41 0l3.29 3.29 6.39-7.18a1 1 0 0 1 1.45-.04c.37.38.39.98.04 1.37l-7.17 8.07a.992.992 0 0 1-1.45.04L9.5 9.48l-5.3 5.3a.996.996 0 0 1-1.41 0zm1.41 6 5.3-5.3 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.37a1 1 0 0 0-1.45.04l-6.39 7.18-3.29-3.29a.996.996 0 0 0-1.41 0l-6.09 6.1a.996.996 0 0 0 0 1.41l.09.09c.39.39 1.03.39 1.41 0z"},[])]); }
return h('svg',{"viewBox":c ? '2 2.51 20 18.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01-1.5-1.5zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99l1.5 1.5z"},[])]);
    }
};

export { script as default };
