<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCellphone = /* @__PURE__ */ ((_) => {
    return r('cellphone', {
        name: 'i-remix-cellphone',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5 0 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2zm0 7h10V4H7zm0 2v9h10v-9z"},[])]);
return h('svg',{"viewBox":c ? '5 0 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2zm0 2v5h10V4z"},[])]);
        }
    });
})();

export default IRemixCellphone;
</script>