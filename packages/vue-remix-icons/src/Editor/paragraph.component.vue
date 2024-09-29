<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixParagraph = /* @__PURE__ */ ((_) => {
    return r('paragraph', {
        name: 'i-remix-paragraph',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '4 4 16 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6zm-2 0a4 4 0 1 0 0 8z"},[])]);
        }
    });
})();

export default IRemixParagraph;
</script>