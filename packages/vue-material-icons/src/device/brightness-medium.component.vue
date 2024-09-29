<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBrightnessMedium = /* @__PURE__ */ ((_) => {
    return r('brightness-medium', {
        name: 'i-material-brightness-medium',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0.69 0.69 22.62 22.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M18 9.52V6h-3.52L12 3.52 9.52 6H6v3.52L3.52 12 6 14.48V18h3.52L12 20.48 14.48 18H18v-3.52L20.48 12zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6"},[]),h('path',{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12zM12 6v12c3.31 0 6-2.69 6-6s-2.69-6-6-6"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.51 1.51 20.97 20.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 15.31 1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2zm-8 1.59V7.1c0-.61.55-1.11 1.15-.99C15.91 6.65 18 9.08 18 12s-2.09 5.35-4.85 5.89c-.6.12-1.15-.38-1.15-.99"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0.69 0.69 22.62 22.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12zM12 6v12c3.31 0 6-2.69 6-6s-2.69-6-6-6"},[])]);
return h('svg',{"viewBox":c ? '0.69 0.69 22.62 22.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6"},[])]);
        }
    });
})();

export default IMaterialBrightnessMedium;
</script>