<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixOrganizationChart = /* @__PURE__ */ ((_) => {
    return r('organization-chart', {
        name: 'i-remix-organization-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2h4a1 1 0 0 1 1 1v3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2v-2H8v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2v-3a1 1 0 0 1 1-1h4V9H9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 17H5v2h4zm10 0h-4v2h4zM14 5h-4v2h4z"},[])]);
        }
    });
})();

export default IRemixOrganizationChart;
</script>