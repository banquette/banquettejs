<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShoppingCart = /* @__PURE__ */ ((_) => {
    return r('shopping-cart', {
        name: 'i-remix-shopping-cart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20.72 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1m2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
return h('svg',{"viewBox":c ? '2 2 20.72 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4m12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
        }
    });
})();

export default IRemixShoppingCart;
</script>