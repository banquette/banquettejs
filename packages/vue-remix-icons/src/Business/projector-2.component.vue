<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixProjector2 = /* @__PURE__ */ ((_) => {
    return r('projector-2', {
        name: 'i-remix-projector-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10.528A6 6 0 0 1 17 3c1.777 0 3.374.773 4.472 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1M11.341 7H3v10h18v-3.528A6 6 0 0 1 11.341 7M17 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 13h2v2H5zm3 0h2v2H8z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 19v2h-2v-2H4v2H2v-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9.81a6.48 6.48 0 0 1 4.69-2 6.48 6.48 0 0 1 4.69 2H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1m-5.5-5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M4 13v2h2v-2zm4 0v2h2v-2z"},[])]);
        }
    });
})();

export default IRemixProjector2;
</script>