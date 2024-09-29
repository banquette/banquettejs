<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPlayDisabled = /* @__PURE__ */ ((_) => {
    return r('play-disabled', {
        name: 'i-material-play-disabled',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.79 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 12.83v2.53l1.55-.99z","opacity":"0.3"},[]),h('path',{d:"M2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41zM10 15.36v-2.53l1.55 1.55zM19 12 8 5v.17l8.45 8.45z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.79 6.79 1.41-1.42z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 3.22 18.97 18.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.1 3.51a.996.996 0 0 0 0 1.41l5.9 5.9v6.35c0 .79.87 1.27 1.54.84l3.45-2.2 6.08 6.08a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0m15.58 9.33a1 1 0 0 0 0-1.69L9.54 5.98a1.01 1.01 0 0 0-.84-.11l7.75 7.75z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.79 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41zM10 15.36v-2.53l1.55 1.55z"},[])]);
return h('svg',{"viewBox":c ? '3 4 17 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5.19V5l11 7-2.55 1.63zm12 14.54-5.11-5.11L8 7.73 4.27 4 3 5.27l5 5V19l5.33-3.4 5.4 5.4z"},[])]);
        }
    });
})();

export default IMaterialPlayDisabled;
</script>