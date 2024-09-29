<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialVolumeDownAlt = /* @__PURE__ */ ((_) => {
    return r('volume-down-alt', {
        name: 'i-material-volume-down-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 13.5 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02S15.48 8.71 14 7.97M3 9v6h4l5 5V4L7 9z"},[])]);
        }
    });
})();

export default IMaterialVolumeDownAlt;
</script>