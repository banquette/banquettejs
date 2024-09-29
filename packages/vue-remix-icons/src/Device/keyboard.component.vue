<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixKeyboard = /* @__PURE__ */ ((_) => {
    return r('keyboard', {
        name: 'i-remix-keyboard',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 17h18v2H3zm0-6h3v3H3zm5 0h3v3H8zM3 5h3v3H3zm10 0h3v3h-3zm5 0h3v3h-3zm-5 6h3v3h-3zm5 0h3v3h-3zM8 5h3v3H8z"},[])]);
        }
    });
})();

export default IRemixKeyboard;
</script>