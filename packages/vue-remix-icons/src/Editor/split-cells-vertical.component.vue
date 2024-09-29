<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSplitCellsVertical = /* @__PURE__ */ ((_) => {
    return r('split-cells-vertical', {
        name: 'i-remix-split-cells-vertical',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001zm-7 1 3 3h-2v6h2l-3 3-3-3h2V9H9z"},[])]);
        }
    });
})();

export default IRemixSplitCellsVertical;
</script>