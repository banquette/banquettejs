<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHardDrive = /* @__PURE__ */ ((_) => {
    return r('hard-drive', {
        name: 'i-remix-hard-drive',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 10.938A8.004 8.004 0 0 0 11.938 4H5zm0 2.013V20h14V4h-5.05A10 10 0 0 1 5 12.95zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m11 14h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.95 2H20a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.05q.494.05 1 .05c5.523 0 10-4.477 10-10q0-.506-.05-1M15 16v2h2v-2zM11.938 2A8 8 0 0 1 3 10.938V3a1 1 0 0 1 1-1z"},[])]);
        }
    });
})();

export default IRemixHardDrive;
</script>