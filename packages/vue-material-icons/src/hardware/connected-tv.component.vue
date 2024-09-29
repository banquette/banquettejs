<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialConnectedTv = /* @__PURE__ */ ((_) => {
    return r('connected-tv', {
        name: 'i-material-connected-tv',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM5 14v2h2c0-1.11-.89-2-2-2m0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5m0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8"},[]),h('path',{d:"M4 5h16v12H4z","opacity":"0.3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.57 16H10c0-2.76-2.24-5-5-5v1.43c1.97 0 3.57 1.6 3.57 3.57"},[]),h('path',{d:"M11.55 16H13c0-4.42-3.59-8-8-8v1.45c3.61 0 6.55 2.93 6.55 6.55M5 14v2h2c0-1.11-.89-2-2-2"},[]),h('path',{d:"M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM7 15.97A2.007 2.007 0 0 0 5.03 14H5v2h2zm-1.38-3.42c1.44.26 2.58 1.4 2.83 2.84.06.36.37.61.73.61.46 0 .82-.41.75-.86a5 5 0 0 0-4.06-4.06.746.746 0 0 0-.87.74c0 .37.26.67.62.73m.02-3.02c3.07.3 5.52 2.75 5.83 5.82.04.37.37.65.74.65.45 0 .79-.4.75-.85a8 8 0 0 0-7.11-7.1.756.756 0 0 0-.85.74c0 .37.27.71.64.74"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v2h8v-2h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2m0 14H4V5h16zM5 14v2h2c0-1.11-.89-2-2-2m0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H10c0-2.76-2.24-5-5-5m0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H13c0-4.42-3.59-8-8-8"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2m0 14H3V5h18zM4 14v2h2c0-1.11-.89-2-2-2m0-3v1.43c1.97 0 3.57 1.6 3.57 3.57H9c0-2.76-2.24-5-5-5m0-3v1.45c3.61 0 6.55 2.93 6.55 6.55H12c0-4.42-3.59-8-8-8"},[])]);
        }
    });
})();

export default IMaterialConnectedTv;
</script>