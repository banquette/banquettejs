<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialStayCurrentLandscape = /* @__PURE__ */ ((_) => {
    return r('stay-current-landscape', {
        name: 'i-material-stay-current-landscape',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 7h14v10H5z","opacity":"0.3"},[]),h('path',{d:"M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1 19h22V5H1zM19 7v10H5V7z"},[])]);
return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2M19 7v10H5V7z"},[])]);
        }
    });
})();

export default IMaterialStayCurrentLandscape;
</script>