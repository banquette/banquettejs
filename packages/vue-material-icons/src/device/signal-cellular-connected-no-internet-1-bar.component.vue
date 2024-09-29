<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalCellularConnectedNoInternet1Bar = /* @__PURE__ */ ((_) => {
    return r('signal-cellular-connected-no-internet-1-bar', {
        name: 'i-material-signal-cellular-connected-no-internet-1-bar',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M22 8V2L2 22h16V8z"},[]),h('path',{d:"M20 10v8h2v-8zm-8 12V12L2 22zm8 0h2v-2h-2z"},[])]);
        }
    });
})();

export default IMaterialSignalCellularConnectedNoInternet1Bar;
</script>