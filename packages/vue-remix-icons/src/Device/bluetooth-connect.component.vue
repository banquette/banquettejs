<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('bluetooth-connect', {
        name: 'i-remix-bluetooth-connect',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 2.03 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.341 12.03 4.343 4.343-5.656 5.656h-2v-6.686l-4.364 4.364-1.415-1.414 5.779-5.778v-.97l-5.779-5.78 1.415-1.414 4.364 4.364V2.029h2l5.656 5.657-4.343 4.343zm-1.313 1.514v5.657l2.828-2.828-2.828-2.829zm0-3.03 2.828-2.828-2.828-2.828v5.657zM19.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"},[])]);
        }
    });
})();
</script>