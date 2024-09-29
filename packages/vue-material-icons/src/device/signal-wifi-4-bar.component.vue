<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSignalWifi4Bar = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-4-bar', {
        name: 'i-material-signal-wifi-4-bar',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '0.36 3 23.28 17.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0z"},[])]);
return h('svg',{"viewBox":c ? '0.36 3 23.28 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01z"},[])]);
        }
    });
})();

export default IMaterialSignalWifi4Bar;
</script>