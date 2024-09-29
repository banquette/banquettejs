<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAttachEmail = /* @__PURE__ */ ((_) => {
    return r('attach-email', {
        name: 'i-material-attach-email',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 10V2H1v16h13v-5c0-1.66 1.34-3 3-3zm-10 1L3 6V4l8 5 8-5v2z"},[]),h('path',{d:"M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3zm-9.47.67c-.32.2-.74.2-1.06 0L3.4 6.25a.85.85 0 1 1 .9-1.44L11 9l6.7-4.19a.85.85 0 1 1 .9 1.44z"},[]),h('path',{d:"M22 14c-.55 0-1 .45-1 1v3c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V17c0 .55.45 1 1 1s1-.45 1-1v-3.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-3c0-.55-.45-1-1-1"},[])]);
if (v === 'outlined' || v === 'twotone')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3 6 8 5 8-5v3h2V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h10v-2H3zm16-2-8 5-8-5z"},[]),h('path',{d:"M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 10V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h11v-5c0-1.66 1.34-3 3-3zm-10 1L3 6V4l8 5 8-5v2z"},[]),h('path',{d:"M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4z"},[])]);
        }
    });
})();

export default IMaterialAttachEmail;
</script>