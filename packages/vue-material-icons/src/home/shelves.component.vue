<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialShelves = /* @__PURE__ */ ((_) => {
    return r('shelves', {
        name: 'i-material-shelves',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 1v2H5V1H3v22h2v-2h14v2h2V1zm0 4v6h-6V7H7v4H5V5zm-2 14v-4h-6v4H5v-6h14v6z"},[])]);
        }
    });
})();

export default IMaterialShelves;
</script>