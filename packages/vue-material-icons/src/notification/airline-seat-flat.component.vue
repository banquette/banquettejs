<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAirlineSeatFlat = /* @__PURE__ */ ((_) => {
    return r('airline-seat-flat', {
        name: 'i-material-airline-seat-flat',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 7 20 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 11a1 1 0 0 0 .71-.3c.39-.4.39-1.02-.01-1.41C5.51 9.11 5.26 9 5 9a1 1 0 0 0-.71.3c-.39.4-.39 1.02.01 1.41.19.18.44.29.7.29m13-2h-7v2h9c0-1.1-.9-2-2-2","opacity":"0.3"},[]),h('path',{d:"M5 13a3 3 0 0 0 2.1-5.14C6.51 7.29 5.75 7 5 7a3 3 0 0 0-2.1 5.14c.59.57 1.35.86 2.1.86m-.71-3.7a1 1 0 0 1 1.41-.02c.4.39.4 1.01.02 1.41-.2.2-.45.31-.72.31-.26 0-.51-.1-.7-.28-.4-.4-.4-1.02-.01-1.42M18 7H9v6h13v-2c0-2.21-1.79-4-4-4m-7 4V9h7c1.1 0 2 .9 2 2zm-9 5h6v2h8v-2h6v-2H2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 7 20 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7v6H9V7zM2 14v2h6v2h8v-2h6v-2zm5.14-1.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 7 20 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11v2H9V9c0-1.1.9-2 2-2h7c2.21 0 4 1.79 4 4M2 15c0 .55.45 1 1 1h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1m5.14-2.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 7 20 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 13a3 3 0 0 0 2.1-5.14C6.51 7.29 5.75 7 5 7a3 3 0 0 0-2.1 5.14c.59.57 1.35.86 2.1.86m-.71-3.7a1 1 0 0 1 1.41-.02c.4.39.4 1.01.02 1.41-.2.2-.45.31-.72.31-.26 0-.51-.1-.7-.28-.4-.4-.4-1.02-.01-1.42M18 7H9v6h13v-2c0-2.21-1.79-4-4-4m-7 4V9h7c1.1 0 2 .9 2 2zm-9 5h6v2h8v-2h6v-2H2z"},[])]);
return h('svg',{"viewBox":c ? '2 7 20 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11v2H9V7h9c2.21 0 4 1.79 4 4M2 14v2h6v2h8v-2h6v-2zm5.14-1.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04"},[])]);
        }
    });
})();

export default IMaterialAirlineSeatFlat;
</script>