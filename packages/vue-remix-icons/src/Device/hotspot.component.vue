<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHotspot = /* @__PURE__ */ ((_) => {
    return r('hotspot', {
        name: 'i-remix-hotspot',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2v2H7v16h10v-9h2v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 5a2 2 0 0 1 2 2h-2zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6z"},[])]);
return h('svg',{"viewBox":c ? '4 1 17 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2v9h7v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 5a2 2 0 0 1 2 2h-2zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6z"},[])]);
        }
    });
})();

export default IRemixHotspot;
</script>