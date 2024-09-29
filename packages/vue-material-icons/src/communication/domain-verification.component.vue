<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDomainVerification = /* @__PURE__ */ ((_) => {
    return r('domain-verification', {
        name: 'i-material-domain-verification',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 18h14V8H5zm3.82-6.42 2.12 2.12 4.24-4.24 1.41 1.41-5.66 5.66L7.4 13z","opacity":"0.3"},[]),h('path',{d:"m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z"},[]),h('path',{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H5V8h14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z"},[]),h('path',{d:"M3 4v16h18V4zm16 14H5V8h14z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.23 15.83c.39.39 1.02.39 1.41 0l4.24-4.24c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0l-3.54 3.53-1.41-1.41c-.39-.39-1.02-.39-1.42 0s-.39 1.02 0 1.41z"},[]),h('path',{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 13c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V8h14z"},[])]);
return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z"},[]),h('path',{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H5V8h14z"},[])]);
        }
    });
})();

export default IMaterialDomainVerification;
</script>