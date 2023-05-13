<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('paint-brush', {
        name: 'i-remix-paint-brush',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732 1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z"},[])]);
return h('svg',{"viewBox":c ? '3 3 19 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732 1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z"},[])]);
        }
    });
})();
</script>