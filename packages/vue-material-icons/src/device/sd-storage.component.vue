<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSdStorage = /* @__PURE__ */ ((_) => {
    return r('sd-storage', {
        name: 'i-material-sd-storage',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 8.83V20h12V4h-7.17zM15 7h2v4h-2zm-3 0h2v4h-2zm-1 4H9V7h2z","opacity":"0.3"},[]),h('path',{d:"M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 2H10L4 8v14h16zm-8 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.6.88-.6 1.4V20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m3 0c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4v16H6V8.83L10.83 4zm0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z"},[])]);
        }
    });
})();

export default IMaterialSdStorage;
</script>