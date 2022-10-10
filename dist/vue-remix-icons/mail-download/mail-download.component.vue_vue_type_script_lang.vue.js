/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-mail-download',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '2 3 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 7.238-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM20 18h3l-4 4-4-4h3v-4h2v4z"},[])]); }
return h('svg',{"viewBox":c ? '2 3 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 12.803A6 6 0 0 0 13.803 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.803zm-9.94-1.12L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439zM20 18h3l-4 4-4-4h3v-4h2v4z"},[])]);
    }
};

export { script as default };
