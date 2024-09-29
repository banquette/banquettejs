<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialShowChart = /* @__PURE__ */ ((_) => {
    return r('show-chart', {
        name: 'i-material-show-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 5.51 20 12.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.5 13.48-4-4L2 16.99l1.5 1.5 6-6.01 4 4L22 6.92l-1.41-1.41z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.41 5.96 19.21 12.11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4.2 17.78 5.3-5.3 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.37a1 1 0 0 0-1.45.04l-6.39 7.18-3.29-3.29a.996.996 0 0 0-1.41 0l-6.09 6.1a.996.996 0 0 0 0 1.41l.09.09c.39.39 1.03.39 1.41 0"},[])]);
return h('svg',{"viewBox":c ? '2 5.51 20 12.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"},[])]);
        }
    });
})();

export default IMaterialShowChart;
</script>