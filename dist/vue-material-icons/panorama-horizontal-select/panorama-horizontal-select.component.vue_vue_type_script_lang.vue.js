/*!
 * Banquette VueMaterialIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-material-panorama-horizontal-select',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'twotone')
    { return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6.38v11.25c2.01-.59 4.61-1.13 8-1.13 3.38 0 5.99.54 8 1.13V6.37c-2.01.59-4.62 1.13-8 1.13-2.68 0-5.42-.39-8-1.12z","opacity":"0.3"},[]),h('path',{d:"M21.01 4C20.45 4 17.4 5.5 12 5.5c-5.31 0-8.49-1.49-9.01-1.49-.53 0-.99.44-.99 1.01V19c0 .57.46 1 .99 1 .57 0 3.55-1.5 9.01-1.5 5.42 0 8.44 1.5 9.01 1.5.53 0 .99-.43.99-1V5c0-.57-.46-1-.99-1zM20 17.63c-2.01-.59-4.62-1.13-8-1.13-3.39 0-5.99.54-8 1.13V6.38c2.58.73 5.32 1.12 8 1.12 3.38 0 5.99-.54 8-1.13v11.26z"},[])]); }
if (v === 'sharp')
    { return h('svg',{"viewBox":c ? '2 3.58 20 16.82' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9 4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9z"},[])]); }
if (v === 'outlined' || v === 'round')
    { return h('svg',{"viewBox":c ? '2 4 20 16.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5.5c-3.89 0-6.95-.84-8.69-1.43A.993.993 0 0 0 2 5.02V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45A.999.999 0 0 0 22 19V5c0-.68-.66-1.17-1.31-.95-2.03.68-4.83 1.45-8.69 1.45z"},[])]); }
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64A.94.94 0 0 0 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z"},[])]);
    }
};

export { script as default };
