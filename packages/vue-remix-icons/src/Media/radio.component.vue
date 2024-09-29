<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRadio = /* @__PURE__ */ ((_) => {
    return r('radio', {
        name: 'i-remix-radio',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 10V8h-2v2H5V6h14v4zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM4 5v14h16V5zm4 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 10h3V6H4v4h11V8h2zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zm1 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6"},[])]);
        }
    });
})();

export default IRemixRadio;
</script>