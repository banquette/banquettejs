<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDirections = /* @__PURE__ */ ((_) => {
    return r('directions', {
        name: 'i-material-directions',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1.01 21.99 21.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.01 12 9 9L21 12l-9-9zM14 7.5l3.5 3.5-3.5 3.5V12h-4v3H8v-4c0-.55.45-1 1-1h5z","opacity":"0.3"},[]),h('path',{d:"M13.42 1.58c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58s1.02-.19 1.41-.58l8.99-8.99c.78-.76.79-2.03.02-2.82zm-1.41 19.41-9-9 9-9 9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.59 1.59 20.82 20.82' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22.41 12 12 1.59 1.59 11.99 12 22.41zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.01 2 19.99 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.71 11.29-9-9a.996.996 0 0 0-1.41 0l-9 9a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 0 0 0-1.41M14 14.5V12h-4v2c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1h5V7.5l3.15 3.15c.2.2.2.51 0 .71z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 1.01 22 21.97' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22.43 10.59-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58s1.02-.19 1.41-.58l8.99-8.99c.79-.76.8-2.02.03-2.82m-10.42 10.4-9-9 9-9 9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1"},[])]);
return h('svg',{"viewBox":c ? '2 2 20.01 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.41 10.59-7.99-8c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0l7.99-8c.79-.79.79-2.05 0-2.83M13.5 14.5V12H10v3H8v-4c0-.55.45-1 1-1h4.5V7.5L17 11z"},[])]);
        }
    });
})();

export default IMaterialDirections;
</script>