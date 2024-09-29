<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialVerticalAlignCenter = /* @__PURE__ */ ((_) => {
    return r('vertical-align-center', {
        name: 'i-material-vertical-align-center',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.21 19H11v3c0 .55.45 1 1 1s1-.45 1-1v-3h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85m5.58-14H13V2c0-.55-.45-1-1-1s-1 .45-1 1v3H9.21a.5.5 0 0 0-.36.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79c.32-.31.1-.85-.35-.85M4 12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 19h3v4h2v-4h3l-4-4zm8-14h-3V1h-2v4H8l4 4zM4 11v2h16v-2z"},[])]);
        }
    });
})();

export default IMaterialVerticalAlignCenter;
</script>