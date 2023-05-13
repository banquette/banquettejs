<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('park', {
        name: 'i-material-park',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3.1 2 17.9 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.26 10h1.9l-3.15-4.5L8.88 10h1.81l-3.9 6h10.47z","opacity":"0.3"},[]),h('path',{d:"M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.9 2.75 16.2 19.25' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.96 12h.08c.81 0 1.28-.91.82-1.57l-5.08-7.25a1 1 0 0 0-1.64 0L6.1 10.43c-.46.66.02 1.57.83 1.57h.04l-2.9 4.46c-.44.66.04 1.54.84 1.54h5.08v2.02c0 1.09.89 1.98 1.98 1.98 1.09 0 1.98-.89 1.98-1.98V18h5.15c.8 0 1.28-.89.83-1.55L16.96 12z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3.1 2 17.9 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.95v-4H21l-4-6zM6.79 16l3.9-6H8.88l3.13-4.5 3.15 4.5h-1.9l4 6H6.79z"},[])]);
return h('svg',{"viewBox":c ? '3.1 2 17.9 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z"},[])]);
        }
    });
})();
</script>