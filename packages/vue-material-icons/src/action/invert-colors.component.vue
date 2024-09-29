<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialInvertColors = /* @__PURE__ */ ((_) => {
    return r('invert-colors', {
        name: 'i-material-invert-colors',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.75 8.99A5.77 5.77 0 0 0 6 13.13C6 16.37 8.69 19 12 19V4.81z","opacity":"0.3"},[]),h('path',{d:"M17.65 7.56 12 2 6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57M6 13.13c0-1.56.62-3.03 1.75-4.14L12 4.81V19c-3.31 0-6-2.63-6-5.87"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2.4 16 18.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14zM6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12.7 2.69c-.39-.38-1.01-.38-1.4 0z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14zM12 2 6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14zM6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2z"},[])]);
        }
    });
})();

export default IMaterialInvertColors;
</script>