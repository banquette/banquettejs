/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-remove-done',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '1.5 2.4 21.32 18.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.14 2.69a.996.996 0 0 0 0 1.41l9.67 9.67-1.41 1.41-3.54-3.53a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l2.12-2.12 5.89 5.89a.996.996 0 1 0 1.41-1.41L5.55 2.69a.996.996 0 0 0-1.41 0zm13.91 9.67 4.24-4.24a.999.999 0 0 0-.01-1.42c-.39-.38-1.02-.38-1.41.01l-4.24 4.24 1.42 1.41zM16.64 6.7a.996.996 0 0 0-1.41 0l-1.42 1.42 1.41 1.41 1.42-1.42a.996.996 0 0 0 0-1.41zM1.79 13.06l4.95 4.95 1.41-1.41-4.95-4.95a.996.996 0 1 0-1.41 1.41z"},[])]); }
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '1.08 1.98 22.17 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.84 1.98 3.43 3.39l10.38 10.38-1.41 1.41-4.24-4.24-1.41 1.41 5.66 5.66 2.83-2.83 6.6 6.6 1.41-1.41L4.84 1.98zm13.21 10.38L23 7.4 21.57 6l-4.94 4.94 1.42 1.42zm-.71-4.96-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM1.08 12.35l5.66 5.66 1.41-1.41-5.66-5.66-1.41 1.41z"},[])]); }
return h('svg',{"viewBox":c ? '0.37 2.81 23.25 18.39' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m1.79 12 5.58 5.59L5.96 19 .37 13.41 1.79 12zm.45-7.78L12.9 14.89l-1.28 1.28L7.44 12l-1.41 1.41L11.62 19l2.69-2.69 4.89 4.89 1.41-1.41L3.65 2.81 2.24 4.22zm14.9 9.27L23.62 7 22.2 5.59l-6.48 6.48 1.42 1.42zM17.96 7l-1.41-1.41-3.65 3.66 1.41 1.41L17.96 7z"},[])]);
    }
};

export { script as default };