<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('text', {
        name: 'i-remix-text',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 4 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 6v15h-2V6H5V4h14v2z"},[])]);
        }
    });
})();
</script>