<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileDamage = /* @__PURE__ */ ((_) => {
    return r('file-damage', {
        name: 'i-remix-file-damage',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9h-5V4H5v7.857l1.5 1.393L10 9.5l3 5 2-2.5 3 3-3-.5-2 2.5-3-4-3 3.5-2-1.25V20h14zm2-1v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3 14 4 2.5 3-3.5 3 4 2-2.5 3 .5-3-3-2 2.5-3-5-3.5 3.75L3 10V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1h6v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008zm18-7h-5V2.003z"},[])]);
        }
    });
})();

export default IRemixFileDamage;
</script>