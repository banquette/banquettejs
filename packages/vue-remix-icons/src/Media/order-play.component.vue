<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixOrderPlay = /* @__PURE__ */ ((_) => {
    return r('order-play', {
        name: 'i-remix-order-play',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 1.57 20.12 18.43' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H2V4zM2 18h20v2H2zm0-7h20v2H2z"},[])]);
        }
    });
})();

export default IRemixOrderPlay;
</script>