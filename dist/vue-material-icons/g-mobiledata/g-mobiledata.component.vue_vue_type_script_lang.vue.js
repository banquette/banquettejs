/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-g-mobiledata',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '7 7 9 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 11v2h2v2H9V9h7V7H7v10h9v-6h-4z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '7 7 9 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 12c0 .55.45 1 1 1h1v2H9V9h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1z"},[])]); }
return h('svg',{"viewBox":c ? '7 7 9 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 11v2h2v2H9V9h7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4z"},[])]);
    }
};

export { script as default };
