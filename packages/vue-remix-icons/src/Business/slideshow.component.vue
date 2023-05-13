<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('slideshow', {
        name: 'i-remix-slideshow',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8zm-9-2h16V8H4v11zm9-9h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4v3h3a3 3 0 1 1-3-3zM2 3h20v2H2V3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8zM8 10a3 3 0 1 0 3 3H8v-3zm5 0v2h6v-2h-6zm0 4v2h6v-2h-6zM2 3h20v2H2V3z"},[])]);
        }
    });
})();
</script>