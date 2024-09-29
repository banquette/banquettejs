<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBackspace = /* @__PURE__ */ ((_) => {
    return r('backspace', {
        name: 'i-material-backspace',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.06 5 2.4 12l4.67 7H22V5zq.015 0 0 0M9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59 17.59 17 14 13.41 10.41 17 9 15.59 12.59 12z","opacity":"0.3"},[]),h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7.07L2.4 12l4.66-7H22zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M24 3H6l-6 9 6 9h18zm-5 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.2 3 23.8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L.37 11.45c-.22.34-.22.77 0 1.11l5.04 7.56c.36.52.9.88 1.59.88h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3.7 13.3a.996.996 0 0 1-1.41 0L14 13.41l-2.89 2.89a.996.996 0 1 1-1.41-1.41L12.59 12 9.7 9.11a.996.996 0 1 1 1.41-1.41L14 10.59l2.89-2.89a.996.996 0 1 1 1.41 1.41L15.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H7.07L2.4 12l4.66-7H22zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"},[])]);
return h('svg',{"viewBox":c ? '0 3 24 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12z"},[])]);
        }
    });
})();

export default IMaterialBackspace;
</script>