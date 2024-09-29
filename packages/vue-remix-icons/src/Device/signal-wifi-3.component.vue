<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSignalWifi3 = /* @__PURE__ */ ((_) => {
    return r('signal-wifi-3', {
        name: 'i-remix-signal-wifi-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.92 17.92 0 0 1 12 3m0 7c-1.898 0-3.683.48-5.241 1.327l5.24 6.49 5.242-6.49A10.94 10.94 0 0 0 12 10m0-5c-3.028 0-5.923.842-8.42 2.392l1.904 2.357C7.4 8.637 9.625 8 12 8s4.6.637 6.516 1.749L20.42 7.39A15.93 15.93 0 0 0 12 5"},[])]);
return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.92 17.92 0 0 1 12 3m0 2c-3.028 0-5.923.842-8.42 2.392l1.904 2.357C7.4 8.637 9.625 8 12 8s4.6.637 6.516 1.749L20.42 7.39A15.93 15.93 0 0 0 12 5"},[])]);
        }
    });
})();

export default IRemixSignalWifi3;
</script>