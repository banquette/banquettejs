<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixClose = /* @__PURE__ */ ((_) => {
    return r('close', {
        name: 'i-remix-close',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5.64 5.64 12.73 12.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"},[])]);
        }
    });
})();

export default IRemixClose;
</script>