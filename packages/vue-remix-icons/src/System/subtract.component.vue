<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('subtract', {
        name: 'i-remix-subtract',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 11 14 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 11h14v2H5z"},[])]);
        }
    });
})();
</script>