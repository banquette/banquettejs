<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixProductHunt = /* @__PURE__ */ ((_) => {
    return r('product-hunt', {
        name: 'i-remix-product-hunt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m1.334-8a1.5 1.5 0 0 0 0-3H10.5v3zm0-5a3.5 3.5 0 0 1 0 7H10.5v3h-2V7z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m1.334-10H10.5V9h2.834a1.5 1.5 0 0 1 0 3m0-5H8.5v10h2v-3h2.834a3.5 3.5 0 0 0 0-7"},[])]);
        }
    });
})();

export default IRemixProductHunt;
</script>