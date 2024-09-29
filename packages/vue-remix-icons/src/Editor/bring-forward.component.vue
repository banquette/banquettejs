<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBringForward = /* @__PURE__ */ ((_) => {
    return r('bring-forward', {
        name: 'i-remix-bring-forward',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 3a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v8h8z"},[])]);
        }
    });
})();

export default IRemixBringForward;
</script>