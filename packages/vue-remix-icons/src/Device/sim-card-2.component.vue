<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSimCard2 = /* @__PURE__ */ ((_) => {
    return r('sim-card-2', {
        name: 'i-remix-sim-card-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 4v16h12V7.828L14.172 4zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 8v8h-2v-6H8v-2zm-5 3h2v2H8zm6 0h2v2h-2zm0-3h2v2h-2zm-6 6h2v2H8zm6 0h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 16v-8H8v2h3v6zm-5-5v2h2v-2zm6 0v2h2v-2zm0-3v2h2v-2zm-6 6v2h2v-2zm6 0v2h2v-2z"},[])]);
        }
    });
})();

export default IRemixSimCard2;
</script>