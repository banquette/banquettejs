/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-pen-nib',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2.45 0.89 20.64 20.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.596 1.04 6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.656.212-1.485a.5.5 0 0 1 .848-.283zM4.595 20.15c3.722-3.331 7.995-4.328 12.643-5.52l.446-4.018-4.297-4.297-4.018.446c-1.192 4.648-2.189 8.92-5.52 12.643L2.454 18.01c2.828-3.3 3.89-6.953 5.303-13.081l6.364-.707 5.657 5.657-.707 6.364c-6.128 1.414-9.782 2.475-13.081 5.303L4.595 20.15zm5.284-6.03a2 2 0 1 1 2.828-2.828A2 2 0 0 1 9.88 14.12z"},[])]); }
return h('svg',{"viewBox":c ? '2.46 1.89 20.63 20.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4.929 21.485 5.846-5.846a2 2 0 1 0-1.414-1.414l-5.846 5.846-1.06-1.06c2.827-3.3 3.888-6.954 5.302-13.082l6.364-.707 5.657 5.657-.707 6.364c-6.128 1.414-9.782 2.475-13.081 5.303l-1.061-1.06zM16.596 2.04l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.656.212-1.485a.5.5 0 0 1 .848-.283z"},[])]);
    }
};

export { script as default };
