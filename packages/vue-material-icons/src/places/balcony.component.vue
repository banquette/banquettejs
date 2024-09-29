<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBalcony = /* @__PURE__ */ ((_) => {
    return r('balcony', {
        name: 'i-material-balcony',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 16H5v4h2zm4 0H9v4h2zm-5-6v4h5V4.08C8.16 4.56 6 7.03 6 10m4 2H8v-2h2zm3-7.92V14h5v-4c0-2.97-2.16-5.44-5-5.92M16 12h-2v-2h2zm-1 4h-2v4h2zm4 0h-2v4h2z","opacity":"0.3"},[]),h('path',{d:"M10 10v2H8v-2zm6 2v-2h-2v2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4zM7 16H5v4h2zm4 0H9v4h2zm0-11.92C8.16 4.56 6 7.03 6 10v4h5zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92zm2 2h-2v4h2zm4 0h-2v4h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 14.27V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v4.27c-.6.34-1 .99-1 1.73v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-.74-.4-1.39-1-1.73M7 20H5v-4h2zm4 0H9v-4h2zm0-6H6v-4c0-2.97 2.16-5.44 5-5.92zm2-9.92A6 6 0 0 1 18 10v4h-5zM15 20h-2v-4h2zm4 0h-2v-4h2zM8 11c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m8 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 10v2H8v-2zm6 2v-2h-2v2zm5 2v8H3v-8h1v-4c0-4.42 3.58-8 8-8s8 3.58 8 8v4zM7 16H5v4h2zm4 0H9v4h2zm0-11.92C8.16 4.56 6 7.03 6 10v4h5zM13 14h5v-4c0-2.97-2.16-5.44-5-5.92zm2 2h-2v4h2zm4 0h-2v4h2z"},[])]);
        }
    });
})();

export default IMaterialBalcony;
</script>