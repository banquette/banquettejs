<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHardware = /* @__PURE__ */ ((_) => {
    return r('hardware', {
        name: 'i-material-hardware',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.77 6H11v5h2V5H9c-.89 0-1.68.39-2.23 1M11 13h2v6h-2z","opacity":"0.3"},[]),h('path',{d:"m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3zm-5 16h-2v-6h2zm0-8h-2V6H6.77C7.32 5.39 8.11 5 9 5h4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3zM9 13v8h6v-8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.59 3.41 15 6V5c0-1.1-.9-2-2-2H9C6.24 3 4 5.24 4 8h5v3h6V8l2.59 2.59c.26.26.62.41 1 .41h.01c.77 0 1.4-.63 1.4-1.41V4.41C20 3.63 19.37 3 18.59 3h-.01c-.37 0-.73.15-.99.41M9 13v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3zm-5 16h-2v-6h2zm-2-8V6H6.77C7.32 5.39 8.11 5 9 5h4v6z"},[])]);
return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3zM9 13v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7z"},[])]);
        }
    });
})();

export default IMaterialHardware;
</script>