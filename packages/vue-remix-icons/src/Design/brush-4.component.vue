<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('brush-4', {
        name: 'i-remix-brush-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 5v6.273H7V5H5v9h14V5H9zm11 11H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 16H4v2h16v-2zM3 14V4a1 1 0 0 1 1-1h3v8.273h2V3h11a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5h1z"},[])]);
        }
    });
})();
</script>