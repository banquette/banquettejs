<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDashboard = /* @__PURE__ */ ((_) => {
    return r('dashboard', {
        name: 'i-remix-dashboard',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 21V11h8v10zM3 13V3h8v10zm6-2V5H5v6zM3 21v-6h8v6zm2-2h4v-2H5zm10 0h4v-6h-4zM13 3h8v6h-8zm2 2v2h4V5z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"},[])]);
        }
    });
})();

export default IRemixDashboard;
</script>