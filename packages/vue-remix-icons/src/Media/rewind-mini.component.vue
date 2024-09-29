<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRewindMini = /* @__PURE__ */ ((_) => {
    return r('rewind-mini', {
        name: 'i-remix-rewind-mini',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.87 6.46 17.13 11.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 9.86 5.968 12 9 14.14zm1.908 7.463a.5.5 0 0 1-.696.12l-7.133-5.035a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.092.288M18 14.14V9.86L14.968 12zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"},[])]);
return h('svg',{"viewBox":c ? '2.87 6.46 17.13 11.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 17.035a.5.5 0 0 1-.788.409l-7.133-5.036a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409zm1.079-4.627a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z"},[])]);
        }
    });
})();

export default IRemixRewindMini;
</script>