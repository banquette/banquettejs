<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCrop32 = /* @__PURE__ */ ((_) => {
    return r('crop-3-2', {
        name: 'i-material-crop-3-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 6H3v12h18zm-2 10H5V8h14z"},[])]);
return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H5V8h14z"},[])]);
        }
    });
})();

export default IMaterialCrop32;
</script>