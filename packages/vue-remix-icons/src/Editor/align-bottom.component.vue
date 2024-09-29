<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAlignBottom = /* @__PURE__ */ ((_) => {
    return r('align-bottom', {
        name: 'i-remix-align-bottom',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h18v2H3zm5-6h3l-4 4-4-4h3V3h2zm10 0h3l-4 4-4-4h3V3h2z"},[])]);
        }
    });
})();

export default IRemixAlignBottom;
</script>