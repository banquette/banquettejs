<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalWifiStatusbarConnectedNoInternet2 = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-statusbar-connected-no-internet-2', {
        name: 'i-material-signal-wifi-statusbar-connected-no-internet-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0 4 22.92 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M17 11.21V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l4.23 4.24A10.96 10.96 0 0 1 17 11.21"},[]),h('path',{d:"M4.23 13.22 12 21l5-5.01v-4.78a10.96 10.96 0 0 0-12.77 2.01M19 18h2v2h-2zm0-8h2v6h-2z"},[])]);
        }
    });
})();

export default IMaterialSignalWifiStatusbarConnectedNoInternet2;
</script>