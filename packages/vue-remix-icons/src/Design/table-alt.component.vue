<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTableAlt = /* @__PURE__ */ ((_) => {
    return r('table-alt', {
        name: 'i-remix-table-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 13H4v3h16zM8 5H4v9h4zm6 0h-4v9h4zm6 0h-4v9h4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 14V3H3a1 1 0 0 0-1 1v10zm8 0V3H9v11zm7 0V4a1 1 0 0 0-1-1h-4v11zm-1 7a1 1 0 0 0 1-1v-4H2v4a1 1 0 0 0 1 1z"},[])]);
        }
    });
})();

export default IRemixTableAlt;
</script>