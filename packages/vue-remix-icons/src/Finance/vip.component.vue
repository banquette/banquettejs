<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixVip = /* @__PURE__ */ ((_) => {
    return r('vip', {
        name: 'i-remix-vip',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 19h20v2H2zm9-11h2v8h-2zM7.965 8h2.125l-2.986 7.964h-2L2.118 8h2.125l1.861 5.113zM17 14v2h-2V8h4a3 3 0 0 1 0 6zm0-4v2h2a1 1 0 0 0 0-2zM2 3h20v2H2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 5.5v7h2v-7zm-.285 0H8.601l-1.497 4.113L5.607 8.5H3.493l2.611 6.964h2zm5.285 5h1.5a2.5 2.5 0 1 0 0-5H14v7h2zm0-2v-1h1.5a.5.5 0 1 1 0 1z"},[])]);
        }
    });
})();

export default IRemixVip;
</script>