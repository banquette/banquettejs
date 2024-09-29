<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixInstall = /* @__PURE__ */ ((_) => {
    return r('install', {
        name: 'i-remix-install',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 2v2H5l-.001 10h14L19 4h-4V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm9.999 14h-14L5 20h14zM17 17v2h-2v-2zM13 2v5h3l-4 4-4-4h3V2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 2v5H8l4 4 4-4h-3V2h7a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 14H5v4h14zm-2 1v2h-2v-2z"},[])]);
        }
    });
})();

export default IRemixInstall;
</script>