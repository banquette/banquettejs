<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFiberNew = /* @__PURE__ */ ((_) => {
    return r('fiber-new', {
        name: 'i-material-fiber-new',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.12 14.47V9.53H8.09v2.88L6.03 9.53H5v4.94h1.03v-2.88l2.1 2.88zm4.12-3.9V9.53h-3.3v4.94h3.3v-1.03h-2.06v-.91h2.06v-1.04h-2.06v-.92zm.82-1.04v4.12c0 .45.37.82.82.82h3.29c.45 0 .82-.37.82-.82V9.53h-1.03v3.71h-.92v-2.89h-1.03v2.9h-.93V9.53z"},[]),h('path',{d:"M4 6h16v12H4z","opacity":"0.3"},[]),h('path',{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4V6h16z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 4H2v16h20zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4zm7 4.74h-6V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M8.5 14.21c0 .43-.36.79-.79.79-.25 0-.49-.12-.64-.33L4.75 11.5v2.88c0 .35-.28.62-.62.62s-.63-.28-.63-.62V9.79c0-.43.36-.79.79-.79h.05c.26 0 .5.12.65.33l2.26 3.17V9.62c0-.34.28-.62.63-.62s.62.28.62.62zm5-4.57c0 .35-.28.62-.62.62H11v1.12h1.88c.35 0 .62.28.62.62v.01c0 .35-.28.62-.62.62H11v1.11h1.88c.35 0 .62.28.62.62 0 .35-.28.62-.62.62h-2.53a.85.85 0 0 1-.85-.85v-4.3c0-.45.38-.83.85-.83h2.53c.35 0 .62.28.62.62zm7 4.36c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9.62c0-.34.28-.62.62-.62s.62.28.62.62v3.89h1.13v-2.9c0-.35.28-.62.62-.62s.62.28.62.62v2.89h1.12V9.62c0-.35.28-.62.62-.62s.62.28.62.62V14z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3.5 9 17 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.25 12.5 4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2V9H7.25zM9.5 15h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5V9h-4zm9.75-6v4.5h-1.12V9.99h-1.25v3.52h-1.13V9H14.5v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4zm7 3.74c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25z"},[])]);
        }
    });
})();

export default IMaterialFiberNew;
</script>