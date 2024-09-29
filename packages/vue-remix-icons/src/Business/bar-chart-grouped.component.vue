<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBarChartGrouped = /* @__PURE__ */ ((_) => {
    return r('bar-chart-grouped', {
        name: 'i-remix-bar-chart-grouped',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 12h2v9H2zm3 2h2v7H5zm11-6h2v13h-2zm3 2h2v11h-2zM9 2h2v19H9zm3 2h2v17h-2z"},[])]);
        }
    });
})();

export default IRemixBarChartGrouped;
</script>