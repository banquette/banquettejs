<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHdrAuto = /* @__PURE__ */ ((_) => {
    return r('hdr-auto', {
        name: 'i-material-hdr-auto',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.04 8.04h-.09l-1.6 4.55h3.29z","opacity":"0.3"},[]),h('path',{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m3.21 13-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11z","opacity":"0.3"},[]),h('path',{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"},[]),h('path',{d:"M11.01 6 6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6zm-.66 6.59 1.6-4.55h.09l1.6 4.55z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},[]),h('path',{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3 14.41-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2-.38 0-.72-.24-.84-.59"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-.99-14L6.88 17h1.9l1-2.81h4.44l.99 2.81h1.9L12.98 6zm-.66 6.59 1.6-4.55h.09l1.6 4.55z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},[]),h('path',{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.21 15-.98-2.81H9.78l-1 2.81h-1.9l4.13-11h1.97l4.13 11z"},[])]);
        }
    });
})();

export default IMaterialHdrAuto;
</script>