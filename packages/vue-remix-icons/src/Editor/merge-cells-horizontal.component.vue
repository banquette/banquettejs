<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMergeCellsHorizontal = /* @__PURE__ */ ((_) => {
    return r('merge-cells-horizontal', {
        name: 'i-remix-merge-cells-horizontal',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v5.999h2V9l3 3-3 3v-2H5v6h6v-2h2v2h6v-6h-2v2l-3-3 3-3v1.999h2V5h-6v2h-2zm2 8v2h-2v-2zm0-4v2h-2V9z"},[])]);
        }
    });
})();

export default IRemixMergeCellsHorizontal;
</script>