<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLiveTv = /* @__PURE__ */ ((_) => {
    return r('live-tv', {
        name: 'i-material-live-tv',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 20h18V8H3zm6-10 7 4-7 4z","opacity":"0.3"},[]),h('path',{d:"M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 14H3V8h18z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 6h-9.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H1v16h22zm-2 14H3V8h18zM9 10v8l7-4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 2.2 22 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.5 17.15 3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88M21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99 8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2m-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 14H3V8h18z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2m0 14H3V8h18zM9 10v8l7-4z"},[])]);
        }
    });
})();

export default IMaterialLiveTv;
</script>