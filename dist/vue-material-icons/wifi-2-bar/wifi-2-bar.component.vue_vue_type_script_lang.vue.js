/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-wifi-2-bar',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '4.94 10 14.13 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6.62-1.63c-.63-.63-.59-1.71.13-2.24C7.33 10.79 9.57 10 12 10c2.43 0 4.67.79 6.49 2.13.72.53.76 1.6.13 2.24-.53.54-1.37.57-1.98.12A7.925 7.925 0 0 0 12 13c-1.73 0-3.33.55-4.64 1.49-.61.44-1.45.41-1.98-.12z"},[])]); }
return h('svg',{"viewBox":c ? '4.24 10 15.52 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 10c3.03 0 5.78 1.23 7.76 3.22l-2.12 2.12A7.967 7.967 0 0 0 12 13c-2.2 0-4.2.9-5.64 2.35l-2.12-2.12C6.22 11.23 8.97 10 12 10zm0 6c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54A4.98 4.98 0 0 0 12 16z"},[])]);
    }
};

export { script as default };
