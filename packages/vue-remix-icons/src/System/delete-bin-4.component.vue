<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDeleteBin4 = /* @__PURE__ */ ((_) => {
    return r('delete-bin-4', {
        name: 'i-remix-delete-bin-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zM6 7v13h12V7zm1-5h10v2H7zm4 8h2v7h-2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zm-9 3v7h2v-7zM7 2h10v2H7z"},[])]);
        }
    });
})();

export default IRemixDeleteBin4;
</script>