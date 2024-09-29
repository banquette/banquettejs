<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBackpack = /* @__PURE__ */ ((_) => {
    return r('backpack', {
        name: 'i-material-backpack',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM7.5 12v2h7v2h2v-4z","opacity":"0.3"},[]),h('path',{d:"M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM7.5 12v2h7v2h2v-4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8v14H4V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86M6 12v2h10v2h2v-4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V3.5C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5V4h4v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.64c1.72.45 3 2 3 3.86M6 13c0 .55.45 1 1 1h9v1c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zm-1.5-8v4h-2v-2h-7v-2z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86M6 12v2h10v2h2v-4z"},[])]);
        }
    });
})();

export default IMaterialBackpack;
</script>