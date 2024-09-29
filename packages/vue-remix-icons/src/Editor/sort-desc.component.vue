<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSortDesc = /* @__PURE__ */ ((_) => {
    return r('sort-desc', {
        name: 'i-remix-sort-desc',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4v12h3l-4 5-4-5h3V4zm-8 14v2H3v-2zm2-7v2H3v-2zm0-7v2H3V4z"},[])]);
        }
    });
})();

export default IRemixSortDesc;
</script>