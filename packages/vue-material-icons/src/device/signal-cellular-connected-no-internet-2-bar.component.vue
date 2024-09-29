<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalCellularConnectedNoInternet2Bar = /* @__PURE__ */ ((_) => {
    return r('signal-cellular-connected-no-internet-2-bar', {
        name: 'i-material-signal-cellular-connected-no-internet-2-bar',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M22 8V2L2 22h16V8z"},[]),h('path',{d:"M14 22V10L2 22zm6-12v8h2v-8zm0 12h2v-2h-2z"},[])]);
        }
    });
})();

export default IMaterialSignalCellularConnectedNoInternet2Bar;
</script>