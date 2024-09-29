<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHorizontalSplit = /* @__PURE__ */ ((_) => {
    return r('horizontal-split', {
        name: 'i-material-horizontal-split',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 15v2H5v-2zm2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z"},[]),h('path',{d:"M5 15h14v2H5z","opacity":"0.3"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 19h16c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m0-8h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 15v2H5v-2zm2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z"},[])]);
return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h18v-6H3zm0-8h18V9H3zm0-6v2h18V5z"},[])]);
        }
    });
})();

export default IMaterialHorizontalSplit;
</script>