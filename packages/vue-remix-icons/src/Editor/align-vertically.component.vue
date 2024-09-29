<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAlignVertically = /* @__PURE__ */ ((_) => {
    return r('align-vertically', {
        name: 'i-remix-align-vertically',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 11h18v2H3zm15 7v3h-2v-3h-3l4-4 4 4zM8 18v3H6v-3H3l4-4 4 4zM18 6h3l-4 4-4-4h3V3h2zM8 6h3l-4 4-4-4h3V3h2z"},[])]);
        }
    });
})();

export default IRemixAlignVertically;
</script>