<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSpace = /* @__PURE__ */ ((_) => {
    return r('space', {
        name: 'i-remix-space',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 9 20 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z"},[])]);
        }
    });
})();

export default IRemixSpace;
</script>