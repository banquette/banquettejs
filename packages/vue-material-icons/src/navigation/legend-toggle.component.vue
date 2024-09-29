<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLegendToggle = /* @__PURE__ */ ((_) => {
    return r('legend-toggle', {
        name: 'i-material-legend-toggle',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 5 16 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 15H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1m0 2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1m-4-6 4.58-3.25c.26-.19.42-.49.42-.81 0-.81-.92-1.29-1.58-.82L15 8.55 10 5 4.48 8.36c-.3.19-.48.51-.48.86 0 .78.85 1.26 1.52.85l4.4-2.68z"},[])]);
return h('svg',{"viewBox":c ? '4 5 16 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 15H4v-2h16zm0 2H4v2h16zm-5-6 5-3.55V5l-5 3.55L10 5 4 8.66V11l5.92-3.61z"},[])]);
        }
    });
})();

export default IMaterialLegendToggle;
</script>