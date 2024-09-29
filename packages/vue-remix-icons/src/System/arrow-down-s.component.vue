<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixArrowDownS = /* @__PURE__ */ ((_) => {
    return r('arrow-down-s', {
        name: 'i-remix-arrow-down-s',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5.64 8.22 12.73 7.78' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 13.172 4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"},[])]);
return h('svg',{"viewBox":c ? '6 10 12 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 16-6-6h12z"},[])]);
        }
    });
})();

export default IRemixArrowDownS;
</script>