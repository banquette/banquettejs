<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixUnderline = /* @__PURE__ */ ((_) => {
    return r('underline', {
        name: 'i-remix-underline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '4 3 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3zM4 20h16v2H4z"},[])]);
        }
    });
})();

export default IRemixUnderline;
</script>