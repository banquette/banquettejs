<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('number-7', {
        name: 'i-remix-number-7',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '6 2 13 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2v1.5L10.763 22H8.574l8.013-18H6V2z"},[])]);
        }
    });
})();
</script>