<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('table-bar', {
        name: 'i-material-table-bar',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('ellipse',{"cx":"12","cy":"7.5","opacity":"0.3","rx":"7.72","ry":"1.5"},[]),h('path',{d:"M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48zM12 9c-4.05 0-6.74-.86-7.72-1.5C5.26 6.86 7.95 6 12 6s6.74.86 7.72 1.5C18.74 8.14 16.05 9 12 9z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H8l-2 5h2l1.2-3h5.6l1.2 3h2l-2-5h-3v-4.02c5.05-.17 9-1.67 9-3.48z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26l-.99 2.47c-.23.61.21 1.27.87 1.27.38 0 .72-.23.86-.58L9.2 17h5.6l.97 2.42c.14.35.48.58.86.58.66 0 1.11-.66.86-1.27l-.99-2.47c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48zM12 6c4.05 0 6.74.86 7.72 1.5C18.74 8.14 16.05 9 12 9s-6.74-.86-7.72-1.5C5.26 6.86 7.95 6 12 6z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7.5C22 5.57 17.52 4 12 4S2 5.57 2 7.5c0 1.81 3.95 3.31 9 3.48V15H9.35c-.82 0-1.55.5-1.86 1.26L6 20h2l1.2-3h5.6l1.2 3h2l-1.5-3.74c-.3-.76-1.04-1.26-1.85-1.26H13v-4.02c5.05-.17 9-1.67 9-3.48z"},[])]);
        }
    });
})();
</script>