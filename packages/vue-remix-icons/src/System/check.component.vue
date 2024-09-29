<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCheck = /* @__PURE__ */ ((_) => {
    return r('check', {
        name: 'i-remix-check',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3.64 5.98 16.97 12.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"},[])]);
        }
    });
})();

export default IRemixCheck;
</script>