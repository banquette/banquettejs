<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalWifiConnectedNoInternet1 = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-connected-no-internet-1', {
        name: 'i-material-signal-wifi-connected-no-internet-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0 4 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M12 12h8.99L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36A7.93 7.93 0 0 1 12 13z"},[]),h('path',{d:"M12 21v-8c-2.21 0-4.2.89-5.65 2.34zm9-5.59L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z"},[])]);
        }
    });
})();

export default IMaterialSignalWifiConnectedNoInternet1;
</script>