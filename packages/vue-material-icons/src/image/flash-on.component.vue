<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('flash-on', {
        name: 'i-material-flash-on',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 10h-4l3-8H7v11h3v9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '7 2 9.26 18.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H13l2.49-6.65A.994.994 0 0 0 14.56 2H8c-.55 0-1 .45-1 1z"},[])]);
if (v === 'outlined' || v === 'sharp')
    return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 2v11h3v9l7-12h-4l3-8z"},[])]);
return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 2v11h3v9l7-12h-4l4-8z"},[])]);
        }
    });
})();
</script>