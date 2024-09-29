<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCrop169 = /* @__PURE__ */ ((_) => {
    return r('crop-16-9', {
        name: 'i-material-crop-16-9',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 7H3v10h18zm-2 8H5V9h14z"},[])]);
return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 8H5V9h14z"},[])]);
        }
    });
})();

export default IMaterialCrop169;
</script>