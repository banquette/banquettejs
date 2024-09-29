<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalCellularNull = /* @__PURE__ */ ((_) => {
    return r('signal-cellular-null', {
        name: 'i-material-signal-cellular-null',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.41 3.41 18.59 18.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6.83V19c0 .55-.45 1-1 1H6.83zm.29-3.12L3.71 20.29c-.63.63-.19 1.71.7 1.71H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.33-1.71-.7"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6.83V20H6.83zM22 2 2 22h20z"},[])]);
        }
    });
})();

export default IMaterialSignalCellularNull;
</script>