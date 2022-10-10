/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-e-mobiledata',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '8 7 8 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V9h5c.55 0 1-.45 1-1z"},[])]); }
return h('svg',{"viewBox":c ? '8 7 8 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"},[])]);
    }
};

export { script as default };
