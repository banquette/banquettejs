<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialWbIridescent = /* @__PURE__ */ ((_) => {
    return r('wb-iridescent', {
        name: 'i-material-wb-iridescent',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3.55 1 16.91 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 11h10v2H7z","opacity":"0.3"},[]),h('path',{d:"M5 15h14V9H5zm2-4h10v2H7zm4-10h2v3h-2zm6.25 4.39 1.41 1.41 1.8-1.79-1.42-1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM5.34 6.805l-1.788-1.79L4.96 3.61l1.788 1.788zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3.55 1 16.91 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15h14V9.05H5zm6-14v3h2V1zm8.04 2.6-1.79 1.79 1.41 1.41 1.8-1.79zM13 23v-2.95h-2V23zm7.45-3.91-1.8-1.79-1.41 1.41 1.79 1.8zM3.55 5.01 5.34 6.8l1.41-1.41L4.96 3.6zM4.96 20.5l1.79-1.8-1.41-1.41-1.79 1.79z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.97 1 16.08 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 15h12c.55 0 1-.45 1-1v-3.95c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1V14c0 .55.45 1 1 1m5-13v1.05c0 .55.45.95 1 .95s1-.4 1-.95V2c0-.55-.45-1-1-1s-1 .45-1 1m7.34 2.3-.38.38a.996.996 0 1 0 1.41 1.41l.38-.38a.996.996 0 1 0-1.41-1.41M13 22v-.96c0-.55-.45-1-1-1s-1 .45-1 1V22c0 .55.45 1 1 1s1-.45 1-1m6.74-3.61-.39-.39a.996.996 0 1 0-1.41 1.41l.38.39c.39.39 1.02.39 1.41 0l.01-.01a.984.984 0 0 0 0-1.4M4.25 5.71l.39.39a.996.996 0 1 0 1.41-1.41l-.39-.39a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41m1.42 14.08.38-.38A.996.996 0 1 0 4.64 18l-.38.38a.996.996 0 1 0 1.41 1.41"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3.55 1 16.91 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15h14V9H5zm2-4h10v2H7zm4-10h2v3h-2zm9.46 4.01L19.04 3.6l-1.79 1.79 1.41 1.41zM11 20h2v3h-2zm6.24-1.29 1.79 1.8 1.42-1.42-1.8-1.79zM4.96 3.595l1.788 1.79L5.34 6.79 3.553 5.003zM3.55 19.08l1.41 1.42 1.79-1.8-1.41-1.41z"},[])]);
return h('svg',{"viewBox":c ? '3.55 0.55 16.91 21.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 14.5h14v-6H5zM11 .55V3.5h2V.55zm8.04 2.5-1.79 1.79 1.41 1.41 1.8-1.79zM13 22.45V19.5h-2v2.95zm7.45-3.91-1.8-1.79-1.41 1.41 1.79 1.8zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79zm1.41 15.49 1.79-1.8-1.41-1.41-1.79 1.79z"},[])]);
        }
    });
})();

export default IMaterialWbIridescent;
</script>