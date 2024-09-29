<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMicroscope = /* @__PURE__ */ ((_) => {
    return r('microscope', {
        name: 'i-remix-microscope',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1.27 18 20.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.196 2.268 3.25 5.63a1 1 0 0 1-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751a1 1 0 0 1-1.366-.366L8.546 8.215a5 5 0 0 0-3.222 6.561A5 5 0 0 1 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549A5 5 0 0 1 12.9 20H21v2l-17 .001A4.98 4.98 0 0 1 3 19c0-1.007.298-1.945.81-2.73a7 7 0 0 1 3.717-9.82l-.393-.682a2 2 0 0 1 .732-2.732l2.598-1.5a2 2 0 0 1 2.732.732M8 16a3 3 0 0 0-2.83 4h5.66A3 3 0 0 0 8 16m3.464-12.732-2.598 1.5 2.75 4.763 2.598-1.5z"},[])]);
return h('svg',{"viewBox":c ? '3 1.27 18 20.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.196 2.268 3.25 5.63a1 1 0 0 1-.366 1.365l-1.3.75 1.001 1.732-1.732 1-1-1.733-1.299.751a1 1 0 0 1-1.366-.366L8.546 8.215a5 5 0 0 0-3.222 6.561A5 5 0 0 1 8 14c1.684 0 3.174.833 4.08 2.109l7.688-4.439 1 1.732-7.878 4.549A5 5 0 0 1 12.9 20H21v2l-17 .001A4.98 4.98 0 0 1 3 19c0-1.007.298-1.945.81-2.73a7 7 0 0 1 3.717-9.82l-.393-.682a2 2 0 0 1 .732-2.732l2.598-1.5a2 2 0 0 1 2.732.732"},[])]);
        }
    });
})();

export default IRemixMicroscope;
</script>