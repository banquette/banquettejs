<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFileCopy = /* @__PURE__ */ ((_) => {
    return r('file-copy', {
        name: 'i-material-file-copy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 7H8v14h11v-9h-5z","opacity":"0.3"},[]),h('path',{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zm4 16H8V7h6v5h5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 1H2v16h2V3h12zm-1 4 6 6v12H6V5zm-1 7h5.5L14 6.5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1m.59 4.59 4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59M15 12h4.5L14 6.5V11c0 .55.45 1 1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"},[])]);
return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"},[])]);
        }
    });
})();

export default IMaterialFileCopy;
</script>