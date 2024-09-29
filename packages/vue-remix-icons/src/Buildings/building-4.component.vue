<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBuilding4 = /* @__PURE__ */ ((_) => {
    return r('building-4', {
        name: 'i-remix-building-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 0V4H5v16zM8 11h3v2H8zm0-4h3v2H8zm0 8h3v2H8zm5 0h3v2h-3zm0-4h3v2h-3zm0-4h3v2h-3z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM8 11v2h3v-2zm0-4v2h3V7zm0 8v2h3v-2zm5 0v2h3v-2zm0-4v2h3v-2zm0-4v2h3V7z"},[])]);
        }
    });
})();

export default IRemixBuilding4;
</script>