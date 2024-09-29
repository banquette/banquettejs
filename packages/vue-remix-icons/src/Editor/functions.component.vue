<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFunctions = /* @__PURE__ */ ((_) => {
    return r('functions', {
        name: 'i-remix-functions',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5 18 7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5z"},[])]);
        }
    });
})();

export default IRemixFunctions;
</script>