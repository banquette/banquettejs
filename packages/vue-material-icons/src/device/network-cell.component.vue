<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNetworkCell = /* @__PURE__ */ ((_) => {
    return r('network-cell', {
        name: 'i-material-network-cell',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.41 3.41 18.59 18.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71M20 20h-3V9.83l3-3z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 22h20V2zm18-2h-3V9.83l3-3z"},[])]);
        }
    });
})();

export default IMaterialNetworkCell;
</script>