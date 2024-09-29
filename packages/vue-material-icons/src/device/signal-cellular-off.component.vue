<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalCellularOff = /* @__PURE__ */ ((_) => {
    return r('signal-cellular-off', {
        name: 'i-material-signal-cellular-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2.41 2.41 19.32 20.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3.41c0-.89-1.08-1.34-1.71-.71l-6.6 6.6L21 17.61zm.44 17.47L5.62 5.06a.996.996 0 1 0-1.41 1.41l5.66 5.66-7.16 7.16c-.63.63-.19 1.71.7 1.71h15.32l1.29 1.29c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 21.14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 1-8.31 8.31 8.31 8.3zM4.91 4.36 3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z"},[])]);
return h('svg',{"viewBox":c ? '1 1 21 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 1-8.59 8.59L21 18.18zM4.77 4.5 3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73z"},[])]);
        }
    });
})();

export default IMaterialSignalCellularOff;
</script>