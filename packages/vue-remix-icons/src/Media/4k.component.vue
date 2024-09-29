<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemix4k = /* @__PURE__ */ ((_) => {
    return r('4k', {
        name: 'i-remix-4k',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.5 10.5V12h-1V9H9v3H7.5V9H6v4.5h3V15h1.5v-1.5zM18 15l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5v-2.25L16.25 15z"},[])]);
        }
    });
})();

export default IRemix4k;
</script>