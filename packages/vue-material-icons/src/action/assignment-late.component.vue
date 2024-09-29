<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAssignmentLate = /* @__PURE__ */ ((_) => {
    return r('assignment-late', {
        name: 'i-material-assignment-late',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5v14h14V5zm8 12h-2v-2h2zm0-4h-2V7h2z","opacity":"0.3"},[]),h('path',{d:"M11 15h2v2h-2zm0-8h2v6h-2zm8-4h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.24-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M19 19H5V5h14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-8 15h-2v-2h2zm0-4h-2V8h2zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M12 13c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 15h2v2h-2zm0-8h2v6h-2zm8-4h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.01 2.01 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M19 19H5V5h14z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6 15h-2v-2h2zm0-4h-2V8h2zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
        }
    });
})();

export default IMaterialAssignmentLate;
</script>