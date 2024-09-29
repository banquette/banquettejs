<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAlarmWarning = /* @__PURE__ */ ((_) => {
    return r('alarm-warning', {
        name: 'i-remix-alarm-warning',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.81 2 18.38 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2zm2 0h12v-6a6 6 0 1 0-12 0zm5-18h2v3h-2zm8.778 2.808 1.414 1.414-2.12 2.121-1.415-1.414zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344zM7 14a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3z"},[])]);
return h('svg',{"viewBox":c ? '2.81 2 18.38 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2zm2-6h2a4 4 0 0 1 4-4V8a6 6 0 0 0-6 6m5-12h2v3h-2zm8.778 2.808 1.414 1.414-2.12 2.121-1.415-1.414zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344z"},[])]);
        }
    });
})();

export default IRemixAlarmWarning;
</script>