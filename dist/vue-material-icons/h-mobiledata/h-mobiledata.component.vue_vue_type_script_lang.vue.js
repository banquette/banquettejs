/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-h-mobiledata',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '7 7 10 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 11H9V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1v-3h6v3c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v3z"},[])]); }
return h('svg',{"viewBox":c ? '7 7 10 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 11H9V7H7v10h2v-4h6v4h2V7h-2v4z"},[])]);
    }
};

export { script as default };
