<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('insert-column-right', {
        name: 'i-remix-insert-column-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zM9 5H5v14h4V5zm9 2a5 5 0 1 1-.001 10.001A5 5 0 0 1 18 7zm1 2h-2v1.999L15 11v2l2-.001V15h2v-2.001L21 13v-2l-2-.001V9z"},[])]);
        }
    });
})();
</script>