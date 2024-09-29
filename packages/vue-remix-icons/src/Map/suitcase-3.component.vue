<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSuitcase3 = /* @__PURE__ */ ((_) => {
    return r('suitcase-3', {
        name: 'i-remix-suitcase-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1zm4 8H5v10h14zM9 10v8H7v-8zm4 0v8h-2v-8zm4 0v8h-2v-8zm-3-7h-4v4h4z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1zm-6 9H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-3-7h-4v4h4z"},[])]);
        }
    });
})();

export default IRemixSuitcase3;
</script>