/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-multiline-chart',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2.4 5 19.24 13.1' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.36 6.28-.06-.06a.955.955 0 0 0-1.39.04l-2.18 2.45C15.68 6.4 12.83 5 9.61 5c-2.5 0-4.83.87-6.75 2.3a.965.965 0 0 0-.11 1.45l.06.06c.33.33.86.39 1.23.11C5.63 7.72 7.54 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-3.29-3.29a.996.996 0 0 0-1.41 0l-6.12 6.13a.96.96 0 0 0 0 1.35l.15.15c.37.37.98.37 1.35 0l5.32-5.33 3.25 3.25c.41.41 1.07.39 1.45-.04l3.35-3.76c.62 1.12 1.08 2.39 1.32 3.73.08.47.47.82.95.82h.09c.6 0 1.05-.55.94-1.14a13.93 13.93 0 0 0-1.89-5L21.4 7.6c.34-.38.32-.96-.04-1.32z"},[])]); }
return h('svg',{"viewBox":c ? '2 5 20 13.49' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 6.92-1.41-1.41-2.85 3.21C15.68 6.4 12.83 5 9.61 5 6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4L2 16.99l1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 6.92z"},[])]);
    }
};

export { script as default };
