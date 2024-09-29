<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPageSeparator = /* @__PURE__ */ ((_) => {
    return r('page-separator', {
        name: 'i-remix-page-separator',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 21v-4H7v4H5v-5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5zM7 3v4h10V3h2v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3zM2 9l4 3-4 3zm20 0v6l-4-3z"},[])]);
        }
    });
})();

export default IRemixPageSeparator;
</script>