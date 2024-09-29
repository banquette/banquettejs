<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSailboat = /* @__PURE__ */ ((_) => {
    return r('sailboat', {
        name: 'i-remix-sailboat',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.5 1.93 19 20.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 18h18a.5.5 0 0 1 .4.8l-2.1 2.8a1 1 0 0 1-.8.4h-13a1 1 0 0 1-.8-.4l-2.1-2.8A.5.5 0 0 1 3 18m4.161-4H13V6.702zM15 2.425V15a1 1 0 0 1-1 1H4.04a.5.5 0 0 1-.39-.812L14.11 2.113a.5.5 0 0 1 .89.312"},[])]);
return h('svg',{"viewBox":c ? '2.5 1.93 19 20.07' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 18h18a.5.5 0 0 1 .4.8l-2.1 2.8a1 1 0 0 1-.8.4h-13a1 1 0 0 1-.8-.4l-2.1-2.8A.5.5 0 0 1 3 18M15 2.425V15a1 1 0 0 1-1 1H4.04a.5.5 0 0 1-.39-.812L14.11 2.113a.5.5 0 0 1 .89.312"},[])]);
        }
    });
})();

export default IRemixSailboat;
</script>