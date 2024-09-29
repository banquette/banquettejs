<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPolymer = /* @__PURE__ */ ((_) => {
    return r('polymer', {
        name: 'i-material-polymer',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0.5 4 23 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"},[])]);
        }
    });
})();

export default IMaterialPolymer;
</script>