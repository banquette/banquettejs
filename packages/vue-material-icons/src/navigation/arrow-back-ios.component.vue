<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialArrowBackIos = /* @__PURE__ */ ((_) => {
    return r('arrow-back-ios', {
        name: 'i-material-arrow-back-ios',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6.25 2.62 10.74 18.76' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '5.84 2.1 11.67 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12z"},[])]);
return h('svg',{"viewBox":c ? '0 2.1 11.67 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"},[])]);
        }
    });
})();

export default IMaterialArrowBackIos;
</script>