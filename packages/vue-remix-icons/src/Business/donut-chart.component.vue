<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDonutChart = /* @__PURE__ */ ((_) => {
    return r('donut-chart', {
        name: 'i-remix-donut-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2.05 19.95 19.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2.05v2.012a8.001 8.001 0 1 0 5.906 14.258l1.423 1.423A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95M21.95 13a9.95 9.95 0 0 1-2.207 5.328l-1.423-1.422A7.96 7.96 0 0 0 19.938 13h2.013zM13.002 2.05a10.004 10.004 0 0 1 8.95 8.95h-2.013a8.005 8.005 0 0 0-6.937-6.938z"},[])]);
return h('svg',{"viewBox":c ? '2 2.05 19.95 19.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2.05v3.02a7 7 0 1 0 5.192 12.536l2.137 2.137A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95M21.95 13a9.95 9.95 0 0 1-2.207 5.328l-2.137-2.136A6.96 6.96 0 0 0 18.929 13zM13.002 2.05a10.004 10.004 0 0 1 8.95 8.95H18.93a7.005 7.005 0 0 0-5.928-5.929z"},[])]);
        }
    });
})();

export default IRemixDonutChart;
</script>