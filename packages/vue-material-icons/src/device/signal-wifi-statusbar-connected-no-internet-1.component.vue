<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalWifiStatusbarConnectedNoInternet1 = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-statusbar-connected-no-internet-1', {
        name: 'i-material-signal-wifi-statusbar-connected-no-internet-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0 4 22.92 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M17 14.76V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l6.35 6.36A7.95 7.95 0 0 1 12 13c1.89 0 3.63.66 5 1.76"},[]),h('path',{d:"M6.35 15.34 12 21l5-5.01v-1.23A7.96 7.96 0 0 0 12 13c-2.21 0-4.2.89-5.65 2.34M19 18h2v2h-2zm0-8h2v6h-2z"},[])]);
        }
    });
})();

export default IMaterialSignalWifiStatusbarConnectedNoInternet1;
</script>