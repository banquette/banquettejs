<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('inventory', {
        name: 'i-material-inventory',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 1 19.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 11.5 1.5 1.5-6.99 7L11 15.5l1.5-1.5 3.01 3L21 11.5z"},[]),h('path',{d:"M17 5v3H7V5H5v14h6.68l-3.51-3.5 4.33-4.33 3.01 3 3.49-3.5V5z","opacity":"0.3"},[]),h('path',{d:"M5 19V5h2v3h10V5h2v5.67l2-2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8.68l-2-2H5zm7-16c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 1 19.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h8v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},[]),h('path',{d:"M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 1 19.06 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5h2v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},[]),h('path',{d:"M21.75 12.25c-.41-.41-1.09-.41-1.5 0L15.51 17l-2.26-2.25c-.41-.41-1.08-.41-1.5 0-.41.41-.41 1.09 0 1.5l3.05 3.04c.39.39 1.02.39 1.41 0l5.53-5.54c.42-.41.42-1.09.01-1.5z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 1 19.5 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"},[]),h('path',{d:"M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4l16-.02V7z"},[])]);
        }
    });
})();
</script>