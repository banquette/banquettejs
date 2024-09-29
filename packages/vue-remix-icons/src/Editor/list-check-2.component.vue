<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixListCheck2 = /* @__PURE__ */ ((_) => {
    return r('list-check-2', {
        name: 'i-remix-list-check-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 4h10v2H11zm0 4h6v2h-6zm0 6h10v2H11zm0 4h6v2h-6zM3 4h6v6H3zm2 2v2h2V6zm-2 8h6v6H3zm2 2v2h2v-2z"},[])]);
        }
    });
})();

export default IRemixListCheck2;
</script>