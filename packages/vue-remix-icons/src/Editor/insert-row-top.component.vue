<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixInsertRowTop = /* @__PURE__ */ ((_) => {
    return r('insert-row-top', {
        name: 'i-remix-insert-row-top',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2H5v4h14zM12 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 12 1m1 2h-2v1.999L9 5v2l2-.001V9h2V6.999L15 7V5l-2-.001z"},[])]);
        }
    });
})();

export default IRemixInsertRowTop;
</script>