<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRhythm = /* @__PURE__ */ ((_) => {
    return r('rhythm', {
        name: 'i-remix-rhythm',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 9h2v12H2zm6-6h2v18H8zm6 9h2v9h-2zm6-6h2v15h-2z"},[])]);
        }
    });
})();

export default IRemixRhythm;
</script>