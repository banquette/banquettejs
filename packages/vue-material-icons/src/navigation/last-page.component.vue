<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('last-page', {
        name: 'i-material-last-page',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.29 8.11 10.18 12l-3.89 3.89A.996.996 0 1 0 7.7 17.3l4.59-4.59a.996.996 0 0 0 0-1.41L7.7 6.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '5.59 6 12.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"},[])]);
return h('svg',{"viewBox":c ? '5.59 6 12.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"},[])]);
        }
    });
})();
</script>