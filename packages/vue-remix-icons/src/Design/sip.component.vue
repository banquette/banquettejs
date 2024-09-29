<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSip = /* @__PURE__ */ ((_) => {
    return r('sip', {
        name: 'i-remix-sip',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3.38 17.62 17.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6.457 18.957 8.564-8.564-1.414-1.414-8.564 8.564zm5.735-11.392-1.414-1.414 1.414-1.414 1.768 1.767 2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.767 1.768-1.414 1.414-1.414-1.414L7.243 21H3v-4.243z"},[])]);
return h('svg',{"viewBox":c ? '3 3.38 17.62 17.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13.96 6.504 2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.767 1.768-1.414 1.414-7.07-7.071 1.413-1.414zM10.778 8.98l4.243 4.243L7.243 21H3v-4.243l7.778-7.778z"},[])]);
        }
    });
})();

export default IRemixSip;
</script>