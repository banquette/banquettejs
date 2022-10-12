/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-elderly',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '6 1.5 14 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.5 3.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm7.03 7.5c-1.57.01-2.94-.9-3.6-2.21l-.79-1.67c-.17-.35-.44-.65-.8-.85a2 2 0 0 0-1.94-.03v-.01l-4.39 2.5C6.39 9.08 6 9.74 6 10.46V13c0 .55.45 1 1 1s1-.45 1-1v-2.54l1.5-.85C9.18 10.71 9 11.85 9 13v5.33L7 21c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2l2.04-2.72c.23-.31.37-.69.4-1.08l.18-2.94L13 18v4c0 .55.45 1 1 1s1-.45 1-1v-4.87c0-.41-.13-.81-.36-1.15l-1.6-2.29v-.01c-.11-1.16.07-2.32.46-3.4a6.02 6.02 0 0 0 3.51 2.52v.2c0 .28.22.5.5.5s.49-.22.49-.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.82-.66-1.51-1.47-1.5z"},[])]); }
return h('svg',{"viewBox":c ? '6 1.5 14 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6.5 7V23h-1V12.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1h-1v-.69a6.02 6.02 0 0 1-3.51-2.52c-.31.87-.49 1.78-.49 2.71 0 .23.02.46.03.69L15 16.5V23h-2v-5l-1.78-2.54L11 19l-3 4-1.6-1.2L9 18.33V13c0-1.15.18-2.29.5-3.39l-1.5.85V14H6V9.3l5.4-3.07v.01a2 2 0 0 1 1.94.03c.36.21.63.51.8.85l.79 1.67A3.987 3.987 0 0 0 18.5 11c.83 0 1.5.67 1.5 1.5z"},[])]);
    }
};

export { script as default };