<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDeleteRow = /* @__PURE__ */ ((_) => {
    return r('delete-row', {
        name: 'i-remix-delete-row',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 5 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1 5 5 0 1 1-8 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-7 10v2h6v-2zm6-8H5v4h14z"},[])]);
        }
    });
})();

export default IRemixDeleteRow;
</script>