<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDoorClosed = /* @__PURE__ */ ((_) => {
    return r('door-closed', {
        name: 'i-remix-door-closed',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2zM17 5H7v14h10zm-2 6v2h-2v-2z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2zm12-10h-2v2h2z"},[])]);
        }
    });
})();

export default IRemixDoorClosed;
</script>