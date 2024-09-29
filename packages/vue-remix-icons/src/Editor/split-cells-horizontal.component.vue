<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSplitCellsHorizontal = /* @__PURE__ */ ((_) => {
    return r('split-cells-horizontal', {
        name: 'i-remix-split-cells-horizontal',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2zm4 4 3 3-3 3v-2H9v2l-3-3 3-3v2h6z"},[])]);
        }
    });
})();

export default IRemixSplitCellsHorizontal;
</script>