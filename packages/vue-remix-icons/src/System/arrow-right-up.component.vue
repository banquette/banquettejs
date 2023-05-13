<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('arrow-right-up', {
        name: 'i-remix-arrow-right-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5.98 6 12.02 12.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.004 9.414-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"},[])]);
return h('svg',{"viewBox":c ? '5.98 6 12.02 12.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.05 12.36-5.656 5.658-1.414-1.415 5.657-5.656-4.95-4.95H18V17.31z"},[])]);
        }
    });
})();
</script>