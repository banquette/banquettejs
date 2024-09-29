<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialToc = /* @__PURE__ */ ((_) => {
    return r('toc', {
        name: 'i-material-toc',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2zM3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 9h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m15 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2z"},[])]);
        }
    });
})();

export default IMaterialToc;
</script>