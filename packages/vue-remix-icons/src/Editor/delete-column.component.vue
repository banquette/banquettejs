<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('delete-column', {
        name: 'i-remix-delete-column',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3a1 1 0 0 1 1 1v8a5 5 0 1 1 .213 8.152L13 20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm-1 2H7v14h4V5zm8 10h-6v2h6v-2z"},[])]);
        }
    });
})();
</script>