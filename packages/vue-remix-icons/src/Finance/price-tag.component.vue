<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('price-tag', {
        name: 'i-remix-price-tag',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1.2 18 20.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3 7 8.445-5.63a1 1 0 0 1 1.11 0L21 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm2 1.07V20h14V8.07l-7-4.666L5 8.07zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"},[])]);
return h('svg',{"viewBox":c ? '3 1.2 18 20.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3 7 8.445-5.63a1 1 0 0 1 1.11 0L21 7v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7zm9 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},[])]);
        }
    });
})();
</script>