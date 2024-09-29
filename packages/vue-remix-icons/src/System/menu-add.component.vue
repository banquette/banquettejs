<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMenuAdd = /* @__PURE__ */ ((_) => {
    return r('menu-add', {
        name: 'i-remix-menu-add',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 15-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15zm-7 3v2H3v-2zm10-7v2H3v-2zm0-7v2H3V4z"},[])]);
        }
    });
})();

export default IRemixMenuAdd;
</script>