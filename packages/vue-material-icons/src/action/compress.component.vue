<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCompress = /* @__PURE__ */ ((_) => {
    return r('compress', {
        name: 'i-material-compress',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1m10.79-6H13V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9.21a.5.5 0 0 0-.36.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.32-.31.1-.85-.35-.85M9.21 19H11v2c0 .55.45 1 1 1s1-.45 1-1v-2h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85M5 14h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 9v2h16V9zm12-5-1.41-1.41L13 4.17V1h-2v3.19L9.39 2.61 8 4l4 4zM4 14h16v-2H4zm4 5 1.39 1.39L11 18.81V22h2v-3.17l1.59 1.59L16 19l-4-4z"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 19h3v3h2v-3h3l-4-4zm8-15h-3V1h-2v3H8l4 4zM4 9v2h16V9zm0 3h16v2H4z"},[])]);
        }
    });
})();

export default IMaterialCompress;
</script>