/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-javascript',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '6 9 11 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 15v-2h1.5v.5h2v-1H12V9h5v2h-1.5v-.5h-2v1H17V15h-5zM9 9v4.5H7.5v-1H6V15h4.5V9H9z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '6 9 11 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.54 10.5c.1.29.38.5.71.5.41 0 .75-.34.75-.75V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1h2.5v1h-2.04a.75.75 0 0 0-.71-.5c-.41 0-.75.34-.75.75V14c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1h-2.5v-1h2.04zm-8.04 3H9V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.75c0 .83-.67 1.5-1.5 1.5H7.5c-.83 0-1.5-.67-1.5-1.5v-.25c0-.41.34-.75.75-.75s.75.34.75.75v.25z"},[])]); }
return h('svg',{"viewBox":c ? '6 9 11 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14v-1h1.5v.5h2v-1H13c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1h-1.5v-.5h-2v1H16c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1zM9 9v4.5H7.5v-1H6v1c0 .83.67 1.5 1.5 1.5H9c.83 0 1.5-.67 1.5-1.5V9H9z"},[])]);
    }
};

export { script as default };
