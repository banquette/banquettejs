/*!
 * Banquette VueRemixIcons v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { h } from 'vue';

var script = {
    name: 'i-remix-edge',
    props: ['width', 'height', 'color', 'crop', 'version'],
    render: function render() {
        var w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
        if (v === 'line')
    { return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.007 14.001A4.559 4.559 0 0 0 8 14.25C8 16.632 9.753 19 13 19c2.373 0 4.528-.655 6-1.553v3.35C17.211 21.564 15.113 22 13 22c-5.502 0-8-3.47-8-7.75 0-3.231 2.041-6 4.943-7.164C8.539 8.663 8 10.341 8 10.996L18 11c0-3.406-2.548-6-6-6-5 0-8.001 3.988-9 5.999C3.29 6.237 7.01 2 12 2c5.2 0 9 4.03 9 9v3H8l.007.001z"},[])]); }
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.644 8.586c-.17-.711-.441-1.448-.774-2.021-.771-1.329-1.464-2.237-3.177-3.32C14.98 2.162 13.076 2 12.17 2c-2.415 0-4.211.86-5.525 1.887C3.344 6.47 3 11 3 11s1.221-2.045 3.54-3.526C7.943 6.579 9.941 6 11.568 6 15.885 6 16 10 16 10H9c0-2 1-3 1-3s-5 2-5 7.044c0 .487-.003 1.372.248 2.283.232.843.7 1.705 1.132 2.353 1.221 1.832 3.045 2.614 3.916 2.904.996.332 2.029.416 3.01.416 2.72 0 4.877-.886 5.694-1.275v-4.172c-.758.454-2.679 1.447-5 1.447-5 0-5-4-5-4h12v-2.49s-.039-1.593-.356-2.924z"},[])]);
    }
};

export { script as default };
