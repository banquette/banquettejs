<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSavedSearch = /* @__PURE__ */ ((_) => {
    return r('saved-search', {
        name: 'i-material-saved-search',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.73 13.31A6.4 6.4 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"},[]),h('path',{d:"m9.5 6-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59h-2.46z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 17.58 17.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.73 13.31c1.13-1.55 1.63-3.58.98-5.74-.68-2.23-2.57-3.98-4.85-4.44a6.52 6.52 0 0 0-7.72 7.73c.46 2.29 2.21 4.18 4.44 4.85 2.16.65 4.19.15 5.74-.98l5.56 5.56a.996.996 0 1 0 1.41-1.41zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"},[]),h('path',{d:"M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z"},[])]);
if (v === 'outlined' || v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.73 13.31A6.4 6.4 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"},[]),h('path',{d:"M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z"},[])]);
return h('svg',{"viewBox":c ? '3 3 17.49 17.49' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14m-2.17-1.5 2.14-1.53 2.14 1.53-.83-2.46 2.15-1.5h-2.62L9.47 6l-.84 2.54H6l2.14 1.49z"},[])]);
        }
    });
})();

export default IMaterialSavedSearch;
</script>