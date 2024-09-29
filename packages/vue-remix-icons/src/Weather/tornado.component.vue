<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTornado = /* @__PURE__ */ ((_) => {
    return r('tornado', {
        name: 'i-remix-tornado',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 3h20v2H2zm2 4h16v2H4zm4 4h14v2H8zm2 4h8v2h-8zm-2 4h6v2H8z"},[])]);
        }
    });
})();

export default IRemixTornado;
</script>