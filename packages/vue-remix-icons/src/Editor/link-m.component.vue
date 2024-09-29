<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLinkM = /* @__PURE__ */ ((_) => {
    return r('link-m', {
        name: 'i-remix-link-m',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3.14 3.21 17.66 17.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.657 14.828-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485zm-2.829 2.829-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414zm0-9.9 1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"},[])]);
        }
    });
})();

export default IRemixLinkM;
</script>