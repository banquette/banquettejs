<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPallet = /* @__PURE__ */ ((_) => {
    return r('pallet', {
        name: 'i-material-pallet',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 18v4h3v-2h5.5v2h3v-2H19v2h3v-4zM18 2H6c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-3 6H9V6h6z"},[])]);
        }
    });
})();

export default IMaterialPallet;
</script>