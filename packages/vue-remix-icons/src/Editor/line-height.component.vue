<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLineHeight = /* @__PURE__ */ ((_) => {
    return r('line-height', {
        name: 'i-remix-line-height',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '1 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 4h10v2H11zM6 7v4H4V7H1l4-4 4 4zm0 10h3l-4 4-4-4h3v-4h2zm5 1h10v2H11zm-2-7h12v2H9z"},[])]);
        }
    });
})();

export default IRemixLineHeight;
</script>