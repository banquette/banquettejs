<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRefund = /* @__PURE__ */ ((_) => {
    return r('refund', {
        name: 'i-remix-refund',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8V5H4v3zm0 2H4v9h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 11h6v2H6.5l4.5-4.5z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm0 2v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9zm-11 5v-2.5L6.5 16H17v-2z"},[])]);
        }
    });
})();

export default IRemixRefund;
</script>