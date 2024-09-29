<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFile2 = /* @__PURE__ */ ((_) => {
    return r('file-2', {
        name: 'i-remix-file-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3 8 6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993zm7-4v5H5v11h14V4z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 9h6a1 1 0 0 0 1-1V2h10.002c.551 0 .998.455.998.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993zm0-2 5-4.997V7z"},[])]);
        }
    });
})();

export default IRemixFile2;
</script>