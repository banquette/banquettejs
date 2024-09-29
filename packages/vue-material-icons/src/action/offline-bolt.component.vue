<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialOfflineBolt = /* @__PURE__ */ ((_) => {
    return r('offline-bolt', {
        name: 'i-material-offline-bolt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.02 2.02 19.96 19.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4.02C7.6 4.02 4.02 7.6 4.02 12S7.6 19.98 12 19.98s7.98-3.58 7.98-7.98S16.4 4.02 12 4.02M11.39 19v-5.5H8.25l4.5-8.5v5.5h3z","opacity":"0.3"},[]),h('path',{d:"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02m0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98M12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.02 2.02 19.96 19.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02m-.52 15.86v-4.14H8.82c-.37 0-.62-.4-.44-.73l3.68-7.17c.23-.47.94-.3.94.23v4.19h2.54c.37 0 .61.39.45.72l-3.56 7.12c-.24.48-.95.31-.95-.22"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2.02 2.02 19.96 19.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02m0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98M12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z"},[])]);
return h('svg',{"viewBox":c ? '2.02 2.02 19.96 19.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02M11.48 20v-6.26H8L13 4v6.26h3.35z"},[])]);
        }
    });
})();

export default IMaterialOfflineBolt;
</script>