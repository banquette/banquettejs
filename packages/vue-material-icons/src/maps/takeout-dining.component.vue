<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTakeoutDining = /* @__PURE__ */ ((_) => {
    return r('takeout-dining', {
        name: 'i-material-takeout-dining',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9.83 5-2.8 2.73L7.12 9h9.75l.09-1.27L14.16 5zM7.79 18h8.44l.51-7H7.28z","opacity":"0.3"},[]),h('path',{d:"M20.59 6.05 19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5-1.59-1.56L2 7.44l3.23 3.11.7 9.45h12.14l.7-9.44L22 7.46zM16.23 18H7.79l-.51-7h9.46zm.64-9H7.12l-.09-1.27L9.83 5h4.33l2.8 2.73z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 7.46-1.41-1.41L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5-1.59-1.56L2 7.44 4.66 10h14.69zM5.93 20h12.14l.63-8.45H5.3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.42 3 19.16 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.29 6.75a.984.984 0 0 0-1.4 0l-.89.88.03-.56-3.46-3.48c-.38-.38-.89-.59-1.42-.59h-4.3c-.53 0-1.04.21-1.42.59L4.97 7.07l.03.5-.89-.87a.98.98 0 0 0-1.39.01l-.02.02a.984.984 0 0 0 .02 1.4L4.66 10h14.69l1.92-1.84c.4-.38.41-1.02.02-1.41m-15.5 11.4c.08 1.04.95 1.85 2 1.85h8.43c1.05 0 1.92-.81 1.99-1.85l.49-6.6H5.3z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 3 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7.79 18-.51-7h9.46l-.51 7zM9.83 5h4.33l2.8 2.73L16.87 9H7.12l-.09-1.27zM22 7.46l-1.41-1.41L19 7.63l.03-.56L14.98 3H9.02L4.97 7.07l.03.5-1.59-1.56L2 7.44l3.23 3.11.7 9.45h12.14l.7-9.44z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-rule":"evenodd",d:"M5.26 11h13.48l-.67 9H5.93zm3.76-7h5.95L19 7.38l1.59-1.59L22 7.21 19.21 10H4.79L2 7.21 3.41 5.8 5 7.38z"},[])]);
        }
    });
})();

export default IMaterialTakeoutDining;
</script>