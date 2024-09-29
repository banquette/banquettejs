<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDossier = /* @__PURE__ */ ((_) => {
    return r('dossier', {
        name: 'i-remix-dossier',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zM7 6H5v14h14V6h-2v2H7zm6 5v2h2v2h-2.001L13 17h-2l-.001-2H9v-2h2v-2zm2-7H9v2h6z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm-4 9h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2zm2-7H9v2h6z"},[])]);
        }
    });
})();

export default IRemixDossier;
</script>