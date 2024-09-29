<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTvOff = /* @__PURE__ */ ((_) => {
    return r('tv-off', {
        name: 'i-material-tv-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h13.46l-12-12H3zm7.12-12L21 17.88V7z","opacity":"0.3"},[]),h('path',{d:"M21 7v10.88l1.85 1.85c.09-.23.15-.47.15-.73V7c0-1.11-.89-2-2-2h-7.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2zm-.54 16 1.26-1.27-1.26 1.26zM2.41 2.13l-.14.14L1 3.54l1.53 1.53C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l1.99 1.99 1.26-1.26.15-.15zM3 19V7h1.46l12 12z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 1 22 21.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7v10.88l2 2V5h-9.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2zM2.41 2.13l-.14.14L1 3.54l1.53 1.53H1V21h17.46l1.99 1.99 1.26-1.26.15-.15zM3 19V7h1.46l12 12z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 1.2 22 21.38' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 8v9.88l1.85 1.85c.1-.22.15-.47.15-.73V7a2 2 0 0 0-2-2h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 4.99 8.36 1.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 5H8.12l2 2H20c.55 0 1 .45 1 1M3.12 2.83a.996.996 0 1 0-1.41 1.41l.82.82C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l1.29 1.29c.39.39 1.02.39 1.41 0 .36-.36.37-.92.07-1.31h.03zM3 18V8c0-.55.45-1 1-1h.46l12 12H4c-.55 0-1-.45-1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7v10.88l1.85 1.85c.09-.23.15-.47.15-.73V7c0-1.11-.89-2-2-2h-7.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H8.12l2 2zm-.54 16 1.26-1.27-1.26 1.26zM2.41 2.13l-.14.14L1 3.54l1.53 1.53C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l1.99 1.99 1.26-1.26.15-.15zM3 19V7h1.46l12 12z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m1 3.54 1.53 1.53C1.65 5.28 1 6.06 1 7v12c0 1.1.9 2 2 2h15.46l2 2 1.26-1.27L2.27 2.27zM3 19V7h1.46l12 12zM21 5h-7.58l3.29-3.3L16 1l-4 4-4-4-.7.7L10.58 5H7.52l2 2H21v11.48l1.65 1.65c.22-.32.35-.71.35-1.13V7c0-1.11-.89-2-2-2"},[])]);
        }
    });
})();

export default IMaterialTvOff;
</script>