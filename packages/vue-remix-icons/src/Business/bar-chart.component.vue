<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBarChart = /* @__PURE__ */ ((_) => {
    return r('bar-chart', {
        name: 'i-remix-bar-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 12h2v9H3zm16-4h2v13h-2zm-8-6h2v19h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 12h4v9H3zm14-4h4v13h-4zm-7-6h4v19h-4z"},[])]);
        }
    });
})();

export default IRemixBarChart;
</script>