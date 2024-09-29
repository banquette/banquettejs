<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalWifiStatusbarConnectedNoInternet = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-statusbar-connected-no-internet', {
        name: 'i-material-signal-wifi-statusbar-connected-no-internet',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0 4 22.92 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 18h2v2h-2zm0-8h2v6h-2z"},[]),h('path',{d:"M17 8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98L12 21l5-5.01z","opacity":"0.3"},[])]);
        }
    });
})();

export default IMaterialSignalWifiStatusbarConnectedNoInternet;
</script>