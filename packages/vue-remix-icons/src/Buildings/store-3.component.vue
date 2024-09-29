<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixStore3 = /* @__PURE__ */ ((_) => {
    return r('store-3', {
        name: 'i-remix-store-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2zM5 13v6h14v-6zm-.96-2h15.92l-.6-3H4.64zM6 14h8v3H6zM3 3h18v2H3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2zM5 13v6h14v-6zm1 1h8v3H6zM3 3h18v2H3z"},[])]);
        }
    });
})();

export default IRemixStore3;
</script>