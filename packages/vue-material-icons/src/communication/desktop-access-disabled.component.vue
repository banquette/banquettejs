<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDesktopAccessDisabled = /* @__PURE__ */ ((_) => {
    return r('desktop-access-disabled', {
        name: 'i-material-desktop-access-disabled',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 1.69 22.99 22.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.41 1.69 0 3.1l1 .99V16c0 1.1.89 2 1.99 2H10v2H8v2h8v-2h-2v-2h.9l6 6 1.41-1.41zM2.99 16V6.09L12.9 16zM4.55 2l2 2H21v12h-2.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"},[]),h('path',{d:"M2.99 6.09V16h9.91zM6.55 4l12 12H21V4z","opacity":"0.3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 1.69 22.99 22.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.41 1.69 0 3.1l1 .99V18h9v2H8v2h8v-2h-2v-2h.9l6 6 1.41-1.41zM2.99 16V6.09L12.9 16zM4.55 2l2 2H21v12h-2.45l2 2h2.44V2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.02 1.71 22.97 21.88' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M.31 2a.996.996 0 0 0 0 1.41l.69.68V16c0 1.1.9 2 2 2h7v2H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h.9l5.29 5.29a.996.996 0 1 0 1.41-1.41L1.72 2A.996.996 0 0 0 .31 2m2.68 13V6.09L12.9 16H3.99c-.55 0-1-.45-1-1M4.55 2l2 2H20c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-1.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 1.69 22.99 22.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.41 1.69 0 3.1l1 .99V16c0 1.1.89 2 1.99 2H10v2H8v2h8v-2h-2v-2h.9l6 6 1.41-1.41zM2.99 16V6.09L12.9 16zM4.55 2l2 2H21v12h-2.45l2 2h.44c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"},[])]);
return h('svg',{"viewBox":c ? '0 1.8 23 22.2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 16c0 1.1-.9 2-2 2h-1l-2-2h3V4H6L4 2h17c1.1 0 2 .9 2 2zm-5.5 2-2-2zm-2.6 0 6 6 1.3-1.3-4.7-4.7-2-2L1.2 1.8 0 3.1l1 1V16c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2zM3 16V6.1l9.9 9.9z"},[])]);
        }
    });
})();

export default IMaterialDesktopAccessDisabled;
</script>