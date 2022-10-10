/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-height',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'round')
    { return h('svg',{"viewBox":c ? '8.71 3.22 6.59 17.57' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 6.99h1.79c.45 0 .67-.54.35-.85l-2.79-2.78a.513.513 0 0 0-.71 0L8.86 6.14c-.32.31-.1.85.35.85H11v10.02H9.21c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H13V6.99z"},[])]); }
return h('svg',{"viewBox":c ? '8 3 8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z"},[])]);
    }
};

export { script as default };
