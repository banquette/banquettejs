<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSecurityUpdateGood = /* @__PURE__ */ ((_) => {
    return r('security-update-good', {
        name: 'i-material-security-update-good',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 21h10v-1H7zM7 3v1h10V3z","opacity":"0.3"},[]),h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 1v22h14V1zm12 17H7V6h10zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-6.66-3.71c.39.39 1.02.39 1.41 0l3.54-3.54a.996.996 0 1 0-1.41-1.41l-2.83 2.83-.71-.71a.996.996 0 1 0-1.41 1.41z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z"},[])]);
return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 17H7V6h10zm-1-7.95-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z"},[])]);
        }
    });
})();

export default IMaterialSecurityUpdateGood;
</script>