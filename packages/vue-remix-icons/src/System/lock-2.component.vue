<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLock2 = /* @__PURE__ */ ((_) => {
    return r('lock-2', {
        name: 'i-remix-lock-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm13 2H5v10h14zm-8 5.732a2 2 0 1 1 2 0V18h-2zM8 8h8V7a4 4 0 1 0-8 0z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-7 7.732V18h2v-2.268a2 2 0 1 0-2 0M16 8V7a4 4 0 1 0-8 0v1z"},[])]);
        }
    });
})();

export default IRemixLock2;
</script>