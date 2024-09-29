<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCameraAlt = /* @__PURE__ */ ((_) => {
    return r('camera-alt', {
        name: 'i-material-camera-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.12 4H9.88L8.05 6H4v12h16V6h-4.05zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5","opacity":"0.3"},[]),h('path',{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"12",r:"3"},[]),h('path',{d:"M16.83 4 15 2H9L7.17 4H2v16h20V4zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"12",r:"3"},[]),h('path',{d:"M20 4h-3.17l-1.24-1.35A2 2 0 0 0 14.12 2H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"12",r:"3.2"},[]),h('path',{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},[])]);
        }
    });
})();

export default IMaterialCameraAlt;
</script>