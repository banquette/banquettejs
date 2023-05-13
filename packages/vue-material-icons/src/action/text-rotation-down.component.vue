<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('text-rotation-down', {
        name: 'i-material-text-rotation-down',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.71 4 17.29 15.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6.35 19.65 1.79-1.79c.32-.32.1-.86-.35-.86H7V5c0-.55-.45-1-1-1s-1 .45-1 1v12h-.79c-.45 0-.67.54-.35.85l1.79 1.79c.19.2.51.2.7.01zM12.2 8.5v5l-1.6.66c-.36.15-.6.5-.6.89 0 .69.71 1.15 1.34.88l8.97-3.88c.42-.18.69-.59.69-1.05 0-.46-.27-.87-.69-1.05l-8.97-3.88a.966.966 0 0 0-1.34.89c0 .39.24.74.6.89l1.6.65zm6.82 2.5L14 12.87V9.13L19.02 11z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 20 3-3H7V4H5v13H3l3 3zm6.2-11.5v5l-2.2.9v2.1l11-4.75v-1.5L10 5.5v2.1l2.2.9zm6.82 2.5L14 12.87V9.13L19.02 11z"},[])]);
return h('svg',{"viewBox":c ? '3 4.25 18 15.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1L21 12zm-7-2.62 5.02 1.87L14 13.12V9.38zM6 19.75l3-3H7V4.25H5v12.5H3l3 3z"},[])]);
        }
    });
})();
</script>