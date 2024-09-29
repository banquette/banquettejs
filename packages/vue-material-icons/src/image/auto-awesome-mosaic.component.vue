<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAutoAwesomeMosaic = /* @__PURE__ */ ((_) => {
    return r('auto-awesome-mosaic', {
        name: 'i-material-auto-awesome-mosaic',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5h4v14H5zm10 10h4v4h-4zm0-10h4v4h-4z","opacity":"0.3"},[]),h('path',{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m6 14H5V5h4zM19 3h-6v8h8V5c0-1.1-.9-2-2-2m0 6h-4V5h4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8zm2-6h4v4h-4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 21h8V3H3zM21 3h-8v8h8zm-8 18h8v-8h-8z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m6 14H5V5h4zM19 3h-6v8h8V5c0-1.1-.9-2-2-2m0 6h-4V5h4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8zm2-6h4v4h-4z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m16-2h-6v8h8V5c0-1.1-.9-2-2-2m-6 18h6c1.1 0 2-.9 2-2v-6h-8z"},[])]);
        }
    });
})();

export default IMaterialAutoAwesomeMosaic;
</script>