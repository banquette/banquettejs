<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShoppingBag2 = /* @__PURE__ */ ((_) => {
    return r('shopping-bag-2', {
        name: 'i-remix-shopping-bag-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM9 6v2a3 3 0 0 0 6 0V6h2v2A5 5 0 0 1 7 8V6z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M9 6H7v2a5 5 0 0 0 10 0V6h-2v2a3 3 0 0 1-6 0z"},[])]);
        }
    });
})();

export default IRemixShoppingBag2;
</script>