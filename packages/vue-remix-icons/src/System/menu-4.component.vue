<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMenu4 = /* @__PURE__ */ ((_) => {
    return r('menu-4', {
        name: 'i-remix-menu-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 18v2H5v-2zm5-7v2H3v-2zm-2-7v2H8V4z"},[])]);
        }
    });
})();

export default IRemixMenu4;
</script>