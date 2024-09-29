<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHotel = /* @__PURE__ */ ((_) => {
    return r('hotel', {
        name: 'i-remix-hotel',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1zm-5-2h2v-8h-6v8h2v-6h2zm0-10V5H5v14h6V9zM7 11h2v2H7zm0 4h2v2H7zm0-8h2v2H7z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 19h2v-8h-6v8h2v-6h2zM3 19V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2H2v-2zm4-8v2h2v-2zm0 4v2h2v-2zm0-8v2h2V7z"},[])]);
        }
    });
})();

export default IRemixHotel;
</script>