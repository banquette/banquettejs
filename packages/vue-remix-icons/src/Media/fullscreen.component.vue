<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFullscreen = /* @__PURE__ */ ((_) => {
    return r('fullscreen', {
        name: 'i-remix-fullscreen',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3h2v6h-2V5h-4V3zM4 3h4v2H4v4H2V3zm16 16v-4h2v6h-6v-2zM4 19h4v2H2v-6h2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 3h6v6h-2V5h-4zM2 3h6v2H4v4H2zm18 16v-4h2v6h-6v-2zM4 19h4v2H2v-6h2z"},[])]);
        }
    });
})();

export default IRemixFullscreen;
</script>