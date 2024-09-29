<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialRamenDining = /* @__PURE__ */ ((_) => {
    return r('ramen-dining', {
        name: 'i-material-ramen-dining',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.73 18.39 1.27.5V20h4v-1.11l1.27-.5c2.16-.85 3.74-2.47 4.4-4.39H4.34c.65 1.92 2.24 3.54 4.39 4.39","opacity":"0.3"},[]),h('path',{d:"M22 3.51V2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78zM8 5.06l1-.11V6.5H8zM8 8h1v4H8zM5.5 5.34l1-.11V6.5h-1zM5.5 8h1v4h-1zm14.16 6c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.5V20h-4v-1.11l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3.51V2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78zM6.5 5.22V6.5h-1V5.34zM5.5 8h1v4h-1zM9 12H8V8h1zm0-5.5H8V5.06l1-.11z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.07 2.09 19.93 19.91' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 2.84c0-.45-.39-.79-.83-.75L4.89 3.9c-.51.05-.89.48-.89.99V12h-.92c-.6 0-1.08.53-1 1.13.44 3.2 2.75 5.87 5.92 7.12V21c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.75c3.17-1.25 5.48-3.92 5.92-7.12.08-.6-.4-1.13-1-1.13H10.5V8h10.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H10.5V4.78l10.83-1.19c.38-.05.67-.37.67-.75M6.5 5.22V6.5h-1V5.34zM5.5 8h1v4h-1zM9 12H8V8h1zm0-5.5H8V5.06l1-.11z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.5V20h-4v-1.11l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39zM22 2 4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78L22 3.51zM8 6.5V5.06l1-.11V6.5zm-2.5 0V5.34l1-.11V6.5zM8 12V8h1v4zm-2.5 0V8h1v4z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 6H8V4.65l1-.12zm0 6H8V7h1zM6 7h1v5H6zm0-2.12 1-.12V6H6zM22 3V2L5 4v8H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10V7h12V6H10V4.41z"},[])]);
        }
    });
})();

export default IMaterialRamenDining;
</script>