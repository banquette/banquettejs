<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('outgoing-mail', {
        name: 'i-material-outgoing-mail',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 5 21 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 11c.17 0 .34.01.5.03V6.87C19 5.84 18.16 5 17.13 5H3.87C2.84 5 2 5.84 2 6.87v10.26C2 18.16 2.84 19 3.87 19h9.73c-.38-.75-.6-1.6-.6-2.5 0-3.04 2.46-5.5 5.5-5.5zm-8.1 2L4 9.19V7h.23l6.18 3.68L16.74 7H17v2.16L10.4 13z"},[]),h('path',{d:"m19 13-1.41 1.41L19.17 16H15v2h4.17l-1.58 1.59L19 21l4-4z"},[])]);
        }
    });
})();
</script>