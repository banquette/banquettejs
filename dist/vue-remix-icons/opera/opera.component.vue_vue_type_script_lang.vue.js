/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-opera',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.766 19.51a8.003 8.003 0 0 0 0-15.02C16.71 5.977 18 8.935 18 12s-1.289 6.024-3.234 7.51zM9.234 4.49a8.003 8.003 0 0 0 0 15.02C7.29 18.023 6 15.065 6 12s1.289-6.024 3.234-7.51zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-3.5c2 0 4-3.033 4-6.5s-2-6.5-4-6.5S8 8.533 8 12s2 6.5 4 6.5z"},[])]); }
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.71 6.365c-1.108 1.305-1.823 3.236-1.873 5.4v.47c.051 2.165.766 4.093 1.872 5.4 1.434 1.862 3.566 3.044 5.95 3.044a7.208 7.208 0 0 0 4.005-1.226 9.94 9.94 0 0 1-7.139 2.535A9.998 9.998 0 0 1 2 12C2 6.476 6.478 2 12 2h.037a9.97 9.97 0 0 1 6.628 2.546 7.239 7.239 0 0 0-4.008-1.226c-2.382 0-4.514 1.183-5.95 3.045h.002zM22 12a9.969 9.969 0 0 1-3.335 7.454c-2.565 1.25-4.955.376-5.747-.17 2.52-.554 4.423-3.6 4.423-7.284 0-3.685-1.903-6.73-4.423-7.283.791-.545 3.182-1.42 5.747-.171A9.967 9.967 0 0 1 22 12z"},[])]);
    }
};

export { script as default };
