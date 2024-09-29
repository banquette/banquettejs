<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixStock = /* @__PURE__ */ ((_) => {
    return r('stock', {
        name: 'i-remix-stock',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5h3v9H8v3H6v-3H3V5h3V2h2zM5 7v5h4V7zm13 3h3v9h-3v3h-2v-3h-3v-9h3V7h2zm-3 2v5h4v-5z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5h3v9H8v3H6v-3H3V5h3V2h2zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2z"},[])]);
        }
    });
})();

export default IRemixStock;
</script>