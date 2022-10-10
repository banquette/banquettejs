/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-key',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '1 6 21.59 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.59 10h-7.94a6.004 6.004 0 0 0-6.88-3.88c-2.29.46-4.15 2.3-4.63 4.58A6.002 6.002 0 0 0 7 18a5.99 5.99 0 0 0 5.65-4H13l1.29 1.29c.39.39 1.02.39 1.41 0L17 14l1.29 1.29c.39.39 1.03.39 1.42 0l2.59-2.61a.999.999 0 0 0-.01-1.42l-.99-.97c-.2-.19-.45-.29-.71-.29zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"},[])]); }
return h('svg',{"viewBox":c ? '1 6 22 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 10h-8.35A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"},[])]);
    }
};

export { script as default };
