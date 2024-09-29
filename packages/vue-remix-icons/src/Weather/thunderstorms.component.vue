<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixThunderstorms = /* @__PURE__ */ ((_) => {
    return r('thunderstorms', {
        name: 'i-remix-thunderstorms',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 21.99 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 18v-2h.5a3.5 3.5 0 1 0-2.5-5.95V10a6 6 0 1 0-8 5.659v2.089a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001zm-4-1.995h3l-5 6.5v-4.5H8l5-6.505z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 20.51' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.988 18 1.216-1.58a1.5 1.5 0 0 0-1.189-2.415H15v-3.976a1.5 1.5 0 0 0-2.69-.914l-6.365 8.281A8.002 8.002 0 0 1 9 2a8 8 0 0 1 7.458 5.099A5.5 5.5 0 1 1 17.5 18zM13 16.005h3l-5 6.5v-4.5H8l5-6.505z"},[])]);
        }
    });
})();

export default IRemixThunderstorms;
</script>