<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCrop54 = /* @__PURE__ */ ((_) => {
    return r('crop-5-4', {
        name: 'i-material-crop-5-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3v16h18zm-2 14H5V6h14z"},[])]);
return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14z"},[])]);
        }
    });
})();

export default IMaterialCrop54;
</script>