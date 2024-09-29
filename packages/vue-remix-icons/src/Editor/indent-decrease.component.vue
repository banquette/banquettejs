<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixIndentDecrease = /* @__PURE__ */ ((_) => {
    return r('indent-decrease', {
        name: 'i-remix-indent-decrease',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 4h18v2H3zm0 15h18v2H3zm8-5h10v2H11zm0-5h10v2H11zm-8 3.5L7 9v7z"},[])]);
        }
    });
})();

export default IRemixIndentDecrease;
</script>