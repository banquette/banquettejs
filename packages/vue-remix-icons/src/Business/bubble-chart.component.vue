<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBubbleChart = /* @__PURE__ */ ((_) => {
    return r('bubble-chart', {
        name: 'i-remix-bubble-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m10 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 14a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 14m8.5-12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 1 1 0-11m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"},[])]);
return h('svg',{"viewBox":c ? '2 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m8.5-10a5.5 5.5 0 1 1 0 11 5.5 5.5 0 1 1 0-11"},[])]);
        }
    });
})();

export default IRemixBubbleChart;
</script>