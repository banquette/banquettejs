<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChargingPile2 = /* @__PURE__ */ ((_) => {
    return r('charging-pile-2', {
        name: 'i-remix-charging-pile-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 0 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0zm-8 8V5H5v14zm-3-8h3l-4 6v-4H5l4-6z"},[])]);
return h('svg',{"viewBox":c ? '2 3 21 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 0 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0zM9 11V7l-4 6h3v4l4-6z"},[])]);
        }
    });
})();

export default IRemixChargingPile2;
</script>