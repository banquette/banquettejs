<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('shield-check', {
        name: 'i-remix-shield-check',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 1 8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A5.998 5.998 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976L12 1zm0 2.049L5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A3.998 3.998 0 0 0 19 13.79V4.604L12 3.05zm4.452 5.173 1.415 1.414L11.503 16 7.26 11.757l1.414-1.414 2.828 2.828 4.95-4.95z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 1 8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A5.998 5.998 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976L12 1zm4.452 7.222-4.95 4.949-2.828-2.828-1.414 1.414L11.503 16l6.364-6.364-1.415-1.414z"},[])]);
        }
    });
})();
</script>