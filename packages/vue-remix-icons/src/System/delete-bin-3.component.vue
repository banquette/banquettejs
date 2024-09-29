<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDeleteBin3 = /* @__PURE__ */ ((_) => {
    return r('delete-bin-3', {
        name: 'i-remix-delete-bin-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7H2V5h20v2zM6 7v13h12V7zm5 2h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zM7 2h10v2H7z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zm-9 2v2h2V9zm0 3v2h2v-2zm0 3v2h2v-2zM7 2h10v2H7z"},[])]);
        }
    });
})();

export default IRemixDeleteBin3;
</script>