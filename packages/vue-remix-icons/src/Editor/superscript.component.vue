<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSuperscript = /* @__PURE__ */ ((_) => {
    return r('superscript', {
        name: 'i-remix-superscript',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5.596 5 4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5zM21.55 6.58a.8.8 0 1 0-1.32-.36l-1.155.33A2 2 0 0 1 21 4a2 2 0 0 1 1.373 3.454L20.744 9H23v1h-4V9z"},[])]);
        }
    });
})();

export default IRemixSuperscript;
</script>