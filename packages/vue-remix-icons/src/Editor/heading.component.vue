<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHeading = /* @__PURE__ */ ((_) => {
    return r('heading', {
        name: 'i-remix-heading',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 4 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 11V4h2v17h-2v-8H7v8H5V4h2v7z"},[])]);
        }
    });
})();

export default IRemixHeading;
</script>