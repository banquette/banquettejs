<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('layout-2', {
        name: 'i-remix-layout-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16zM11 5H5v14h6V5zm8 8h-6v6h6v-6zm0-8h-6v6h6V5z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 3v18H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7zm10 10v7a1 1 0 0 1-1 1h-7v-8h8zM20 3a1 1 0 0 1 1 1v7h-8V3h7z"},[])]);
        }
    });
})();
</script>