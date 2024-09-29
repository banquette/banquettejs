<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCode = /* @__PURE__ */ ((_) => {
    return r('code', {
        name: 'i-remix-code',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '1 4.93 22 14.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m23 12-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414z"},[])]);
        }
    });
})();

export default IRemixCode;
</script>