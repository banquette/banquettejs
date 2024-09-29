<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPieChartBox = /* @__PURE__ */ ((_) => {
    return r('pie-chart-box', {
        name: 'i-remix-pie-chart-box',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm12.9 8A5.002 5.002 0 0 1 7 12a5 5 0 0 1 4-4.9V13zm0-2H13V7.1a5.01 5.01 0 0 1 3.9 3.9"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13.9 10H11V7.1a5.002 5.002 0 0 0 1 9.9 5 5 0 0 0 4.9-4m0-2A5.01 5.01 0 0 0 13 7.1V11z"},[])]);
        }
    });
})();

export default IRemixPieChartBox;
</script>