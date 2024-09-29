<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHistory = /* @__PURE__ */ ((_) => {
    return r('history', {
        name: 'i-remix-history',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.98 9.98 0 0 1 8-4m1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.865-5.135L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2m1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7z"},[])]);
        }
    });
})();

export default IRemixHistory;
</script>