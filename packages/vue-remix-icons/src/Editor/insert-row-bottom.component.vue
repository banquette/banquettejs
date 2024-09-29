<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixInsertRowBottom = /* @__PURE__ */ ((_) => {
    return r('insert-row-bottom', {
        name: 'i-remix-insert-row-bottom',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 13a5 5 0 1 1-.001 10.001A5 5 0 0 1 12 13m1 2h-2v1.999L9 17v2l2-.001V21h2v-2.001L15 19v-2l-2-.001zm7-12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM5 5v4h14V5z"},[])]);
        }
    });
})();

export default IRemixInsertRowBottom;
</script>