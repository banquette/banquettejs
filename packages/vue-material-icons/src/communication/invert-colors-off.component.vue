<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialInvertColorsOff = /* @__PURE__ */ ((_) => {
    return r('invert-colors-off', {
        name: 'i-material-invert-colors-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 2 19.8 20.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14.83V19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28zm0-10.02v4.37l-2.2-2.2z","opacity":"0.3"},[]),h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22l4.2 4.2a7.73 7.73 0 0 0-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l3.1 3.1zM12 19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28L12 14.83zM8.38 5.56 12 2l5.65 5.56C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 2.4 18.97 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l3.5 3.5a7.73 7.73 0 0 0-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l2.4 2.4c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41M12 19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28L12 14.83zM8.38 5.56l2.91-2.87c.39-.38 1.01-.38 1.4 0l4.95 4.87C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2 19.8 20.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22l4.2 4.2a7.73 7.73 0 0 0-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l3.1 3.1zM12 19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28L12 14.83zM8.38 5.56 12 2l5.65 5.56C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97z"},[])]);
        }
    });
})();

export default IMaterialInvertColorsOff;
</script>