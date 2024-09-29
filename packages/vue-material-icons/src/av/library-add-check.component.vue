<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLibraryAddCheck = /* @__PURE__ */ ((_) => {
    return r('library-add-check', {
        name: 'i-material-library-add-check',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 16h12V4H8zm2.4-6.91 2.07 2.08L17.6 6 19 7.41 12.47 14 9 10.5z","opacity":"0.3"},[]),h('path',{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-7.53-2L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41zM4 20h14v2H4c-1.1 0-2-.9-2-2V6h2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 2H6v16h16zm-9.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41zM4 6H2v16h16v-2H4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4a.996.996 0 0 1 1.41 0l1.36 1.37 4.42-4.46a.996.996 0 0 1 1.41 0c.38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4z"},[])]);
        }
    });
})();

export default IMaterialLibraryAddCheck;
</script>