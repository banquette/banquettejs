<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('widgets', {
        name: 'i-material-widgets',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 1.69 19.32 19.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z","opacity":"0.3"},[]),h('path',{d:"M16.66 1.69 11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65 2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 2.11 18.9 18.89' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 14v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zM3 4v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1zm12.95-1.6L11.7 6.64a.996.996 0 0 0 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25a.996.996 0 0 0 0-1.41L17.37 2.4c-.39-.39-1.03-.39-1.42 0z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 1.69 19.32 19.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.66 4.52 2.83 2.83-2.83 2.83-2.83-2.83 2.83-2.83M9 5v4H5V5h4m10 10v4h-4v-4h4M9 15v4H5v-4h4m7.66-13.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65zM11 3H3v8h8V3zm10 10h-8v8h8v-8zm-10 0H3v8h8v-8z"},[])]);
return h('svg',{"viewBox":c ? '3 1.69 19.32 19.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"},[])]);
        }
    });
})();
</script>