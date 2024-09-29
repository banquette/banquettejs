<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTable2 = /* @__PURE__ */ ((_) => {
    return r('table-2', {
        name: 'i-remix-table-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 10v4h6v-4zm-2 0H5v4h6zm2 9h6v-3h-6zm-2 0v-3H5v3zm2-14v3h6V5zm-2 0H5v3h6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"},[])]);
        }
    });
})();

export default IRemixTable2;
</script>