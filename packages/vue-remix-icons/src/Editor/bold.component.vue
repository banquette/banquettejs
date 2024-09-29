<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBold = /* @__PURE__ */ ((_) => {
    return r('bold', {
        name: 'i-remix-bold',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '6 4 12 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 11h4.5a2.5 2.5 0 1 0 0-5H8zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5M8 13v5h5.5a2.5 2.5 0 1 0 0-5z"},[])]);
        }
    });
})();

export default IRemixBold;
</script>