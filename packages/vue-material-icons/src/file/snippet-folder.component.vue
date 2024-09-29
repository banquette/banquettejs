<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSnippetFolder = /* @__PURE__ */ ((_) => {
    return r('snippet-folder', {
        name: 'i-material-snippet-folder',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.17 6H4v12h16V8h-8.83z","opacity":"0.3"},[]),h('path',{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2.5-5.88v3.38h-3v-5h1.38zM16.5 9H13v8h6v-5.5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 6-2-2H2v16h20V6zm7 11h-6V9h3.5l2.5 2.5zm-3.12-6.5 1.62 1.62v3.38h-3v-5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.88 10.5 1.62 1.62v3.38h-3v-5zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h5.17c.53 0 1.04.21 1.41.59L12 6h8c1.1 0 2 .9 2 2m-3 3.91c0-.27-.11-.52-.29-.71L16.8 9.29c-.19-.18-.45-.29-.71-.29H14c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2.5-5.88v3.38h-3v-5h1.38zM13 9v8h6v-5.5L16.5 9z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15.88 10.5 1.62 1.62v3.38h-3v-5zM22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h6l2 2h8c1.1 0 2 .9 2 2m-3 3.5L16.5 9H13v8h6z"},[])]);
        }
    });
})();

export default IMaterialSnippetFolder;
</script>