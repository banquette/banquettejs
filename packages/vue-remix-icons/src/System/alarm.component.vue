<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAlarm = /* @__PURE__ */ ((_) => {
    return r('alarm', {
        name: 'i-remix-alarm',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.75 2.75 20.51 19.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18m0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14m1-7h3v2h-5V8h2zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697zm16.97-3.535 3.536 3.535-1.414 1.415-3.536-3.536z"},[])]);
return h('svg',{"viewBox":c ? '1.75 2.75 20.51 19.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18m1-9V8h-2v7h5v-2zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697zm16.97-3.535 3.536 3.535-1.414 1.415-3.536-3.536z"},[])]);
        }
    });
})();

export default IRemixAlarm;
</script>