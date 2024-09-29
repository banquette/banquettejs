<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileCopy2 = /* @__PURE__ */ ((_) => {
    return r('file-copy-2', {
        name: 'i-remix-file-copy-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8 5 20h10V8zM9 6h8v10h2V4H9zm-2 5h6v2H7zm0 4h6v2H7z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1zm2 0h8v10h2V4H9zm-2 5v2h6v-2zm0 4v2h6v-2z"},[])]);
        }
    });
})();

export default IRemixFileCopy2;
</script>