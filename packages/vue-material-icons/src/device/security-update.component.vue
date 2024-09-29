<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSecurityUpdate = /* @__PURE__ */ ((_) => {
    return r('security-update', {
        name: 'i-material-security-update',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 20h10v1H7zM7 3h10v1H7z","opacity":"0.3"},[]),h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 8h-3V8h-2v4H8l4 4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 1v22h14V1zm12 17H7V6h10zm-1-6h-3V8h-2v4H8l4 4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-2.21-5.79H13V9c0-.55-.45-1-1-1s-1 .45-1 1v3.21H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.36-.85"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zM7 4V3h10v1zm9 8-4 4-4-4 1.41-1.41L11 12.17V8h2v4.17l1.59-1.59z"},[])]);
return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2m12 15H7V6h10zm-1-6h-3V8h-2v4H8l4 4z"},[])]);
        }
    });
})();

export default IMaterialSecurityUpdate;
</script>