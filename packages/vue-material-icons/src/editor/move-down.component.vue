<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMoveDown = /* @__PURE__ */ ((_) => {
    return r('move-down', {
        name: 'i-material-move-down',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 4 21 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 6h5v3h-5z","opacity":"0.3"},[]),h('path',{d:"M3 11c0 2.45 1.76 4.47 4.08 4.91l-1.49-1.49L7 13l4 4.01L7 21l-1.41-1.41 1.58-1.58v-.06A7.007 7.007 0 0 1 1 11c0-3.87 3.13-7 7-7h3v2H8c-2.76 0-5 2.24-5 5m19 0V4h-9v7zm-2-2h-5V6h5zm-7 4h9v7h-9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.01 4 20.99 16.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.01 10.72a4.985 4.985 0 0 0 4.07 5.18l-.79-.79A.996.996 0 1 1 7.7 13.7l2.59 2.59c.39.39.39 1.02 0 1.41l-2.58 2.6a.996.996 0 1 1-1.41-1.41l.88-.88v-.06a6.995 6.995 0 0 1-6.15-7.47C1.29 6.78 4.55 4 8.26 4H10c.55 0 1 .45 1 1s-.45 1-1 1H8.22c-2.7 0-5.07 2.04-5.21 4.72M15 11h5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2m5-2h-5V6h5zm0 11h-5c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2"},[])]);
return h('svg',{"viewBox":c ? '1 4 21 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 11c0 2.45 1.76 4.47 4.08 4.91l-1.49-1.49L7 13l4 4.01L7 21l-1.41-1.41 1.58-1.58v-.06A7.007 7.007 0 0 1 1 11c0-3.87 3.13-7 7-7h3v2H8c-2.76 0-5 2.24-5 5m19 0V4h-9v7zm-2-2h-5V6h5zm-7 4h9v7h-9z"},[])]);
        }
    });
})();

export default IMaterialMoveDown;
</script>