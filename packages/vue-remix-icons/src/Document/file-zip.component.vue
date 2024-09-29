<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileZip = /* @__PURE__ */ ((_) => {
    return r('file-zip', {
        name: 'i-remix-file-zip',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zm-5-8v5h-4v-3h2v-2zm-2-8h2v2h-2zm-2 2h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 2v2h2V2h8.007c.548 0 .993.444.993.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2zm2 2v2h2V4zm-2 2v2h2V6zm2 2v2h2V8zm-2 2v2h2v-2zm2 2v2h-2v3h4v-5z"},[])]);
        }
    });
})();

export default IRemixFileZip;
</script>