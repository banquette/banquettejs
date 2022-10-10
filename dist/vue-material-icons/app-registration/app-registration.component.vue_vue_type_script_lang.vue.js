/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-app-registration',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '4 4 16.44 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97-2.12-2.12zm3-5.83V10h-4v4h2.03zm3.671-.824 1.415-1.414 2.12 2.12-1.413 1.415z"},[])]); }
if (v === 'round')
    { return h('svg',{"viewBox":c ? '4 4 17 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"6",r:"2"},[]),h('circle',{"cx":"6","cy":"18",r:"2"},[]),h('circle',{"cx":"6","cy":"12",r:"2"},[]),h('circle',{"cx":"6","cy":"6",r:"2"},[]),h('circle',{"cx":"18","cy":"6",r:"2"},[]),h('path',{d:"M11 18.07v1.43c0 .28.22.5.5.5h1.4c.13 0 .26-.05.35-.15l5.83-5.83-2.12-2.12-5.81 5.81c-.1.1-.15.23-.15.36zM12.03 14 14 12.03V12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2h.03zm8.82-2.44-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71z"},[])]); }
if (v === 'outlined' || v === 'twotone')
    { return h('svg',{"viewBox":c ? '4 4 17 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm12 0h4v4h-4zm-5 13.86V20h2.1l5.98-5.97-2.12-2.12zm3-5.83V10h-4v4h2.03zm6.85-.47-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71z"},[])]); }
return h('svg',{"viewBox":c ? '4 4 17 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17a.41.41 0 0 0-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 0 0 0-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"},[])]);
    }
};

export { script as default };
