<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixListCheck = /* @__PURE__ */ ((_) => {
    return r('list-check', {
        name: 'i-remix-list-check',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3.5 18 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 4h13v2H8zm-5-.5h3v3H3zm0 7h3v3H3zm0 7h3v3H3zM8 11h13v2H8zm0 7h13v2H8z"},[])]);
        }
    });
})();

export default IRemixListCheck;
</script>