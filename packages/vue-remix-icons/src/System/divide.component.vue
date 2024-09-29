<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDivide = /* @__PURE__ */ ((_) => {
    return r('divide', {
        name: 'i-remix-divide',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 5 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 11h14v2H5zm7-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},[])]);
        }
    });
})();

export default IRemixDivide;
</script>