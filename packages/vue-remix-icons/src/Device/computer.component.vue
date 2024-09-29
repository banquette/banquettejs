<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixComputer = /* @__PURE__ */ ((_) => {
    return r('computer', {
        name: 'i-remix-computer',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 16h16V5H4zm9 2v2h4v2H7v-2h4v-2H2.992A1 1 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 18v2h4v2H7v-2h4v-2H2.992A1 1 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007z"},[])]);
        }
    });
})();

export default IRemixComputer;
</script>