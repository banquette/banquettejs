<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialKeyboardHide = /* @__PURE__ */ ((_) => {
    return r('keyboard-hide', {
        name: 'i-material-keyboard-hide',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 15h16V5H4zm13-9h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm0 3h8v2H8zM5 6h2v2H5zm0 3h2v2H5z","opacity":"0.3"},[]),h('path',{d:"M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12H4V5h16zm-9-9h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zM5 9h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2zm-5 17 4-4H8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 3H2.01L2 17h20zM11 6h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm-1 2H5V9h2zm0-3H5V6h2zm9 7H8v-2h8zm0-4h-2V9h2zm0-3h-2V6h2zm3 3h-2V9h2zm0-3h-2V6h2zm-7 15 4-4H8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 20 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 3h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm-1 2H5V9h2zm0-3H5V6h2zm8 7H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m1-4h-2V9h2zm0-3h-2V6h2zm3 3h-2V9h2zm0-3h-2V6h2zm-6.65 14.65 2.79-2.79a.5.5 0 0 0-.35-.85H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.19.19.51.19.7 0"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 12H4V5h16zm-9-9h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zM5 9h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2zm-5 17 4-4H8z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 3h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zm-1 2H5V9h2zm0-3H5V6h2zm9 7H8v-2h8zm0-4h-2V9h2zm0-3h-2V6h2zm3 3h-2V9h2zm0-3h-2V6h2zm-7 15 4-4H8z"},[])]);
        }
    });
})();

export default IMaterialKeyboardHide;
</script>