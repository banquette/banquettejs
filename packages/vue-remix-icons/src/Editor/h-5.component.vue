<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('h-5', {
        name: 'i-remix-h-5',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 4 20.25 16.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 8v2h-4.323l-.464 2.636A3.999 3.999 0 0 1 22.25 16.5a4.001 4.001 0 0 1-7.846 1.103l1.923-.551a2.002 2.002 0 0 0 3.923-.552 2 2 0 0 0-3.56-1.252l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z"},[])]);
        }
    });
})();
</script>