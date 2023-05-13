<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('24-hours', {
        name: 'i-remix-24-hours',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 13a3 3 0 0 1 2.08 5.162L12.17 20H15v2H9v-1.724l3.693-3.555A1 1 0 1 0 11 16H9a3 3 0 0 1 3-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zM4 12a7.985 7.985 0 0 0 3 6.246v2.416A9.995 9.995 0 0 1 2 12h2zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012A8.001 8.001 0 0 0 5.385 7.5H8v2H2v-6h2V6a9.98 9.98 0 0 1 8-4z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 13a3 3 0 0 1 2.08 5.162L12.17 20H15v2H9v-1.724l3.693-3.555A1 1 0 1 0 11 16H9a3 3 0 0 1 3-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zM4 12a7.985 7.985 0 0 0 3 6.246v2.416A9.995 9.995 0 0 1 2 12h2zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012A8.001 8.001 0 0 0 5.865 6.865L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2z"},[])]);
        }
    });
})();
</script>