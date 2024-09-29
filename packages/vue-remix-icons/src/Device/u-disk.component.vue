<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixUDisk = /* @__PURE__ */ ((_) => {
    return r('u-disk', {
        name: 'i-remix-u-disk',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 12H5v8h14zM5 10V2h14v8h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zm2 0h10V4H7zm2-4h2v2H9zm4 0h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 12h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1M5 2h14v8H5zm4 3v2h2V5zm4 0v2h2V5z"},[])]);
        }
    });
})();

export default IRemixUDisk;
</script>