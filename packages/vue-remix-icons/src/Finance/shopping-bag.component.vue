<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShoppingBag = /* @__PURE__ */ ((_) => {
    return r('shopping-bag', {
        name: 'i-remix-shopping-bag',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7zm2-2h6V6a3 3 0 0 0-6 0z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 1a5 5 0 0 1 5 5v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V6a5 5 0 0 1 5-5m5 10h-2v1a1 1 0 0 0 1.993.117L17 12zm-8 0H7v1a1 1 0 0 0 1.993.117L9 12zm3-8a3 3 0 0 0-2.995 2.824L9 6v2h6V6a3 3 0 0 0-2.824-2.995z"},[])]);
        }
    });
})();

export default IRemixShoppingBag;
</script>