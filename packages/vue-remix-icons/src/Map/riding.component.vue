<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRiding = /* @__PURE__ */ ((_) => {
    return r('riding', {
        name: 'i-remix-riding',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m13 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m13 3a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-6.969-8.203L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.97 6.97 0 0 0 3.917 1.975l-.01 2.015a8.96 8.96 0 0 1-5.321-2.575L11.53 9.797zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
        }
    });
})();

export default IRemixRiding;
</script>