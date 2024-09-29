<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCake = /* @__PURE__ */ ((_) => {
    return r('cake', {
        name: 'i-remix-cake',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 0.4 22 21.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7zm6 6H5v7h14zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098z"},[])]);
return h('svg',{"viewBox":c ? '1 0.4 22 21.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7zm.83-6.598A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098z"},[])]);
        }
    });
})();

export default IRemixCake;
</script>