<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBankCard2 = /* @__PURE__ */ ((_) => {
    return r('bank-card-2', {
        name: 'i-remix-bank-card-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 9H4v7h16zm0-4V5H4v3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm0-4H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"},[])]);
        }
    });
})();

export default IRemixBankCard2;
</script>