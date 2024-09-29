<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBorderRight = /* @__PURE__ */ ((_) => {
    return r('border-right', {
        name: 'i-material-border-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h2v2H3zm0 16h2v2H3zM15 3h2v2h-2zm0 16h2v2h-2zm0-8h2v2h-2zM3 15h2v2H3zm0-4h2v2H3zm0-4h2v2H3zm8 8h2v2h-2zm-4-4h2v2H7zm0-8h2v2H7zm12 0h2v18h-2zM7 19h2v2H7zm4-16h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 8h2v2h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 21h2v-2H7zM3 5h2V3H3zm4 0h2V3H7zm0 8h2v-2H7zm-4 8h2v-2H3zm8 0h2v-2h-2zm-8-8h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm8 8h2v-2h-2zm4-4h2v-2h-2zm4-9v16c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1m-4 17h2v-2h-2zm0-16h2V3h-2zm-4 8h2v-2h-2zm0-8h2V3h-2zm0 4h2V7h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 21h2v-2H7zM3 5h2V3H3zm4 0h2V3H7zm0 8h2v-2H7zm-4 8h2v-2H3zm8 0h2v-2h-2zm-8-8h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm8 8h2v-2h-2zm4-4h2v-2h-2zm4-10v18h2V3zm-4 18h2v-2h-2zm0-16h2V3h-2zm-4 8h2v-2h-2zm0-8h2V3h-2zm0 4h2V7h-2z"},[])]);
        }
    });
})();

export default IMaterialBorderRight;
</script>