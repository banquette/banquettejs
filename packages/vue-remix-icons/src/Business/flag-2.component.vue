<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFlag2 = /* @__PURE__ */ ((_) => {
    return r('flag-2', {
        name: 'i-remix-flag-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 19.64 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 17v5H2V3h19.138a.5.5 0 0 1 .435.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748zM4 5v10h14.554l-2.858-5 2.858-5z"},[])]);
return h('svg',{"viewBox":c ? '2 3 19.64 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 3h19.138a.5.5 0 0 1 .435.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4v5H2z"},[])]);
        }
    });
})();

export default IRemixFlag2;
</script>