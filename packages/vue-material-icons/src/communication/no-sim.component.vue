<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('no-sim', {
        name: 'i-material-no-sim',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.38 3 18.88 19.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 19h9.23L7 9.77z","opacity":"0.3"},[]),h('path',{d:"M3.79 3.74 2.38 5.15l2.74 2.74-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88 1.41-1.41L3.79 3.74zM7 19V9.77L16.23 19H7z"},[]),h('path',{d:"M10.84 5 9.36 6.47 17 14.11V5z","opacity":"0.3"},[]),h('path',{d:"M10.84 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2.38 3 18.88 19.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.79 3.74 2.38 5.15l2.74 2.74-.12.12V21h13.27l1.58 1.62 1.41-1.41zM19 16.11V3h-8.99L7.95 5.06z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.8 3 18.05 19.2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.09 4.44a.996.996 0 0 0 0 1.41l2.03 2.03-.12.13V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.17 1.17a.996.996 0 1 0 1.41-1.41L4.5 4.44a.996.996 0 0 0-1.41 0zM19 16.11V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06 19 16.11z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2.38 3 18.88 19.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.26 21.21 3.79 3.74 2.38 5.15l2.74 2.74-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88 1.41-1.41zM7 19V9.77L16.23 19H7zm3.84-14H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z"},[])]);
return h('svg',{"viewBox":c ? '2.38 3 18.74 19.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88 2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"},[])]);
        }
    });
})();
</script>