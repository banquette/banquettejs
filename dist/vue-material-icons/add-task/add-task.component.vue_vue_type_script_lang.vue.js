/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-add-task',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '2 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.29 5.89-10 10a.996.996 0 0 1-1.41 0l-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12 9.29-9.29a.996.996 0 0 1 1.41 0c.4.39.4 1.02.01 1.41zM12 20c-4.71 0-8.48-4.09-7.95-8.9.39-3.52 3.12-6.41 6.61-6.99 1.81-.3 3.53.02 4.99.78a1.003 1.003 0 0 0 .93-1.78c-1.47-.75-3.13-1.16-4.9-1.11-5.14.16-9.41 4.34-9.67 9.47C1.72 17.24 6.3 22 12 22c1.2 0 2.34-.21 3.41-.6.68-.25.87-1.13.35-1.65a.98.98 0 0 0-1.04-.23c-.85.31-1.77.48-2.72.48zm7-5h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 5.18 10.59 16.6l-4.24-4.24 1.41-1.41 2.83 2.83 10-10L22 5.18zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.57 0 3.04.46 4.28 1.25l1.45-1.45A10.02 10.02 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.36-.44 4.78-1.22l-1.5-1.5c-1 .46-2.11.72-3.28.72zm7-5h-3v2h3v3h2v-3h3v-2h-3v-3h-2v3z"},[])]);
    }
};

export { script as default };
