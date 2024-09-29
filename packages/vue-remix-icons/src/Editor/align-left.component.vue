<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAlignLeft = /* @__PURE__ */ ((_) => {
    return r('align-left', {
        name: 'i-remix-align-left',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 4h18v2H3zm0 15h14v2H3zm0-5h18v2H3zm0-5h14v2H3z"},[])]);
        }
    });
})();

export default IRemixAlignLeft;
</script>