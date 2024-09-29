<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalWifiConnectedNoInternet3 = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-connected-no-internet-3', {
        name: 'i-material-signal-wifi-connected-no-internet-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0 4 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M21.18 11.8 24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l2.82 2.82C5.17 9.45 8.41 8 12 8s6.83 1.45 9.18 3.8"},[]),h('path',{d:"M21.18 11.8C18.83 9.45 15.59 8 12 8s-6.83 1.45-9.18 3.8L12 21v-9h8.99zM19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z"},[])]);
        }
    });
})();

export default IMaterialSignalWifiConnectedNoInternet3;
</script>