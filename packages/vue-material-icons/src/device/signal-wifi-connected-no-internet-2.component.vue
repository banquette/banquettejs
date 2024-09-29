<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalWifiConnectedNoInternet2 = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-connected-no-internet-2', {
        name: 'i-material-signal-wifi-connected-no-internet-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0 4 24 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M18.31 12h2.67L24 8.98A16.88 16.88 0 0 0 12 4C7.31 4 3.07 5.9 0 8.98l4.23 4.24A10.96 10.96 0 0 1 12 10c2.35 0 4.52.74 6.31 2"},[]),h('path',{d:"M12 10c-3.03 0-5.78 1.23-7.77 3.22L12 21v-9h6.32c-1.8-1.26-3.97-2-6.32-2m9 5.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09z"},[])]);
        }
    });
})();

export default IMaterialSignalWifiConnectedNoInternet2;
</script>