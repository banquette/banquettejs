<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHardDrive2 = /* @__PURE__ */ ((_) => {
    return r('hard-drive-2', {
        name: 'i-remix-hard-drive-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 14h14V4H5zm0 2v4h14v-4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m11 15h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1M5 16v4h14v-4zm10 1h2v2h-2z"},[])]);
        }
    });
})();

export default IRemixHardDrive2;
</script>