<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixWallet2 = /* @__PURE__ */ ((_) => {
    return r('wallet-2', {
        name: 'i-remix-wallet-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7V5H4v14h16v-2h-8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 6v6h7V9zm2 2h3v2h-3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 8h-9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 3h3v2h-3z"},[])]);
        }
    });
})();

export default IRemixWallet2;
</script>