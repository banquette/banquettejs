<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('heavy-showers', {
        name: 'i-remix-heavy-showers',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22.02 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472v2.458zM7 14h2v6H7v-6zm8 0h2v6h-2v-6zm-4 3h2v6h-2v-6z"},[])]);
return h('svg',{"viewBox":c ? '1 2 21.99 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 18v5h-2v-5H9v3H7v-3.252a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001v3h-2v-3h-2z"},[])]);
        }
    });
})();
</script>