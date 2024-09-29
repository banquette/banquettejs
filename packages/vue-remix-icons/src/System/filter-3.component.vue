<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFilter3 = /* @__PURE__ */ ((_) => {
    return r('filter-3', {
        name: 'i-remix-filter-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"},[])]);
        }
    });
})();

export default IRemixFilter3;
</script>