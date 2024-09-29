<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialScreenshot = /* @__PURE__ */ ((_) => {
    return r('screenshot', {
        name: 'i-material-screenshot',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z"},[]),h('path',{d:"M7 3h10v1H7zm0 17h10v1H7z","opacity":"0.3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 1v22h14V1zm12 17H7V6h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zM9.5 8.5h1.75c.41 0 .75-.34.75-.75S11.66 7 11.25 7h-2.5c-.41 0-.75.34-.75.75v2.5c0 .41.34.75.75.75s.75-.34.75-.75zm3.25 8.5h2.5c.41 0 .75-.34.75-.75v-2.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75h-1.75c-.41 0-.75.34-.75.75s.34.75.75.75"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z"},[])]);
return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zM9.5 8.5H12V7H8v4h1.5zM12 17h4v-4h-1.5v2.5H12z"},[])]);
        }
    });
})();

export default IMaterialScreenshot;
</script>