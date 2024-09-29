<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAlignRight = /* @__PURE__ */ ((_) => {
    return r('align-right', {
        name: 'i-remix-align-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 4h18v2H3zm4 15h14v2H7zm-4-5h18v2H3zm4-5h14v2H7z"},[])]);
        }
    });
})();

export default IRemixAlignRight;
</script>