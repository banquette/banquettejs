<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNearbyError = /* @__PURE__ */ ((_) => {
    return r('nearby-error', {
        name: 'i-material-nearby-error',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.18 1.18 20.82 21.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7.58 16.42 12 12 16.42 7.58 12zm0 11.62L4.8 12 12 4.8l6 6V7.17l-5.99-5.99L1.18 12.01l10.83 10.83L18 16.83V13.2zm8 .8h2v2h-2zm2-10h-2v8h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20.01 20.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11.29 8.28-3.01 3.01a.996.996 0 0 0 0 1.41l3.01 3.01c.39.39 1.02.39 1.41 0l3.01-3.01a.996.996 0 0 0 0-1.41L12.7 8.28a.996.996 0 0 0-1.41 0"},[]),h('path',{d:"m10.59 2.59-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l4.58-4.6V13.2l-6 6L4.79 12 12 4.79l6 6V7.17l-4.58-4.58c-.78-.79-2.05-.79-2.83 0M20 11v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1"},[]),h('circle',{"cx":"21","cy":"21",r:"1"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 7.57 4.42 4.42L12 16.41l-4.42-4.42zm0 11.62-7.2-7.2 7.2-7.2 6 6V7.16l-4.58-4.58c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0L18 16.82v-3.63zm8 .81h2v2h-2zm2-10h-2v8h2z"},[])]);
        }
    });
})();

export default IMaterialNearbyError;
</script>