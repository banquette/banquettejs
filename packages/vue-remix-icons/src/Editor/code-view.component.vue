<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCodeView = /* @__PURE__ */ ((_) => {
    return r('code-view', {
        name: 'i-remix-code-view',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0.69 7.05 22.63 9.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.95 8.464 1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95z"},[])]);
        }
    });
})();

export default IRemixCodeView;
</script>