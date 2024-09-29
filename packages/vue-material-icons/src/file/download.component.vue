<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDownload = /* @__PURE__ */ ((_) => {
    return r('download', {
        name: 'i-material-download',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z","opacity":"0.3"},[]),h('path',{d:"M15 9V3H9v6H5l7 7 7-7zm-3 4.17L9.83 11H11V5h2v6h1.17zM5 18h14v2H5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17 9.83 11zm-6 7h14v2H5z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"},[])]);
        }
    });
})();

export default IMaterialDownload;
</script>