<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('navigate-next', {
        name: 'i-material-navigate-next',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '8.61 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.02 18 6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '9.02 6.42 6.58 11.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"},[])]);
if (v === 'outlined' || v === 'sharp')
    return h('svg',{"viewBox":c ? '8.61 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"},[])]);
return h('svg',{"viewBox":c ? '8.59 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"},[])]);
        }
    });
})();
</script>