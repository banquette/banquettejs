<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSwapBox = /* @__PURE__ */ ((_) => {
    return r('swap-box', {
        name: 'i-remix-swap-box',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m12 4 3.5 3-3.5 3v-2h-4V9h4zM9 17l-3.5-3L9 11v2h4v2H9z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m12 4v2h-4v2h4v2l3.5-3zM9 17v-2h4v-2H9v-2l-3.5 3z"},[])]);
        }
    });
})();

export default IRemixSwapBox;
</script>