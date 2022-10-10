/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-hexagon',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '1.6 3 20.8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"opacity":"0.3",d:"M16.05 19h-8.1l-4.04-7 4.04-7h8.1l4.04 7z"},[]),h('path',{d:"M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9-5.2-9zm-1.15 16h-8.1l-4.04-7 4.04-7h8.09l4.04 7-4.03 7z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '1.91 3 20.17 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.05 3h-8.1c-.71 0-1.37.38-1.73 1l-4.04 7c-.36.62-.36 1.38 0 2l4.04 7c.36.62 1.02 1 1.73 1h8.09c.71 0 1.37-.38 1.73-1l4.04-7c.36-.62.36-1.38 0-2l-4.04-7c-.35-.62-1.01-1-1.72-1z"},[])]); }
if (v === 'outlined')
    { return h('svg',{"viewBox":c ? '1.6 3 20.8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9-5.2-9zm-1.15 16h-8.1l-4.04-7 4.04-7h8.09l4.04 7-4.03 7z"},[])]); }
return h('svg',{"viewBox":c ? '1.6 3 20.8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z"},[])]);
    }
};

export { script as default };
