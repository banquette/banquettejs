/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-settings-power',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '4 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-22c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1zm3.94 3.06-.02.02c-.41.41-.36 1.08.08 1.46 1.51 1.34 2.33 3.43 1.88 5.7-.46 2.28-2.29 4.14-4.56 4.62A6.01 6.01 0 0 1 6 11c0-1.78.78-3.37 2.01-4.47.43-.39.47-1.04.07-1.45l-.02-.02a.991.991 0 0 0-1.36-.04c-2.01 1.77-3.12 4.53-2.56 7.52.59 3.15 3.11 5.7 6.26 6.31 5.12.99 9.6-2.9 9.6-7.85 0-2.38-1.05-4.52-2.71-5.99a.99.99 0 0 0-1.35.05zM16 24c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"},[])]); }
return h('svg',{"viewBox":c ? '4 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44-1.45 1.45A5.969 5.969 0 0 1 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44A7.961 7.961 0 0 0 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"},[])]);
    }
};

export { script as default };
