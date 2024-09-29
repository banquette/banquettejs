<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFunction = /* @__PURE__ */ ((_) => {
    return r('function', {
        name: 'i-remix-function',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8zm2-8v4h4V5zm0 10v4h4v-4zM5 5v4h4V5zm0 10v4h4v-4z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h8v8H3zm0 10h8v8H3zM13 3h8v8h-8zm0 10h8v8h-8z"},[])]);
        }
    });
})();

export default IRemixFunction;
</script>