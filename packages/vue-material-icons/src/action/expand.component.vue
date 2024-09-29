<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialExpand = /* @__PURE__ */ ((_) => {
    return r('expand', {
        name: 'i-material-expand',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 20h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1M5 2h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1m8 7h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0L8.85 8.15a.5.5 0 0 0 .36.85H11v6H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.35-.85H13z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 20h16v2H4zM4 2h16v2H4zm5.41 11.59L8 15l4 4 4-4-1.41-1.41L13 15.17V8.83l1.59 1.58L16 9l-4-4-4 4 1.41 1.41L11 8.83v6.34z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z"},[])]);
        }
    });
})();

export default IMaterialExpand;
</script>