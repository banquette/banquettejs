<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialUpload = /* @__PURE__ */ ((_) => {
    return r('upload', {
        name: 'i-material-upload',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.83 8H11v6h2V8h1.17L12 5.83z","opacity":"0.3"},[]),h('path',{d:"m12 3-7 7h4v6h6v-6h4zm1 5v6h-2V8H9.83L12 5.83 14.17 8zM5 18h14v2H5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 3.41 14 16.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 16h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 3.7a.996.996 0 0 0-1.41 0L6.71 8.29c-.63.63-.19 1.71.7 1.71H9v5c0 .55.45 1 1 1m-4 2h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 16h6v-6h4l-7-7-7 7h4zm3-10.17L14.17 8H13v6h-2V8H9.83zM5 18h14v2H5z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 20h14v-2H5zm0-10h4v6h6v-6h4l-7-7z"},[])]);
        }
    });
})();

export default IMaterialUpload;
</script>