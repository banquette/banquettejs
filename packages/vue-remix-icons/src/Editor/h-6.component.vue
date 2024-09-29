<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixH6 = /* @__PURE__ */ ((_) => {
    return r('h-6', {
        name: 'i-remix-h-6',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 4 20.5 16.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8zM4 4v7h7V4h2v16h-2v-7H4v7H2V4zm14.5 10.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 18.5 14.5"},[])]);
        }
    });
})();

export default IRemixH6;
</script>