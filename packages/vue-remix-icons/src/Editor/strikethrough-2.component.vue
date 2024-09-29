<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixStrikethrough2 = /* @__PURE__ */ ((_) => {
    return r('strikethrough-2', {
        name: 'i-remix-strikethrough-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 9h-2V6H5V4h14v2h-6zm0 6v5h-2v-5zM3 11h18v2H3z"},[])]);
        }
    });
})();

export default IRemixStrikethrough2;
</script>