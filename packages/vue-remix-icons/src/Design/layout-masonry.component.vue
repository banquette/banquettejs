<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLayoutMasonry = /* @__PURE__ */ ((_) => {
    return r('layout-masonry', {
        name: 'i-remix-layout-masonry',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-11-5H4v4h7zm9-4h-7v8h7zm-9-6H4v8h7zm9 0h-7v4h7z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 9.999V20a1 1 0 0 1-1 1h-8V9.999zm-11 6V21H3a1 1 0 0 1-1-1v-4.001zM11 3v10.999H2V4a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3.999h-9V3z"},[])]);
        }
    });
})();

export default IRemixLayoutMasonry;
</script>