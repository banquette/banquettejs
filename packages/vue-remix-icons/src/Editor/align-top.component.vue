<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAlignTop = /* @__PURE__ */ ((_) => {
    return r('align-top', {
        name: 'i-remix-align-top',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18v2H3zm5 8v10H6V11H3l4-4 4 4zm10 0v10h-2V11h-3l4-4 4 4z"},[])]);
        }
    });
})();

export default IRemixAlignTop;
</script>