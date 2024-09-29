<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRoundedCorner = /* @__PURE__ */ ((_) => {
    return r('rounded-corner', {
        name: 'i-remix-rounded-corner',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 19v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2h-2v-2zm-4 0v2H7v-2zm-4 0v2H3v-2zm16-4v2h-2v-2zM5 15v2H3v-2zm0-4v2H3v-2zm11-8a5 5 0 0 1 4.995 4.783L21 8v5h-2V8a3.01 3.01 0 0 0-2.824-2.995L16 5h-5V3zM5 7v2H3V7zm0-4v2H3V3zm4 0v2H7V3z"},[])]);
        }
    });
})();

export default IRemixRoundedCorner;
</script>