<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSignalWifi1 = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-1', {
        name: 'i-remix-signal-wifi-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.92 17.92 0 0 1 12 3m0 12a6 6 0 0 0-2 .34l2 2.477 2-2.477a6.1 6.1 0 0 0-2-.34m0-10c-3.028 0-5.923.842-8.42 2.392l5.108 6.324A8 8 0 0 1 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39A15.93 15.93 0 0 0 12 5"},[])]);
return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.92 17.92 0 0 1 12 3m0 2c-3.028 0-5.923.842-8.42 2.392l5.108 6.324A8 8 0 0 1 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39A15.93 15.93 0 0 0 12 5"},[])]);
        }
    });
})();

export default IRemixSignalWifi1;
</script>