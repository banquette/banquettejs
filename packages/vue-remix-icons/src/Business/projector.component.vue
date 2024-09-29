<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixProjector = /* @__PURE__ */ ((_) => {
    return r('projector', {
        name: 'i-remix-projector',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0m0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5zM15 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 2h2v2H6z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.112 12a4.502 4.502 0 0 0 8.776 0H22v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8zM5 16h2v2H5zm10.5-2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M11.112 10H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2.112a4.502 4.502 0 0 0-8.776 0"},[])]);
        }
    });
})();

export default IRemixProjector;
</script>