<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialKeyboardDoubleArrowLeft = /* @__PURE__ */ ((_) => {
    return r('keyboard-double-arrow-left', {
        name: 'i-material-keyboard-double-arrow-left',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5.42 6.42 13.17 11.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.29 17.29a.996.996 0 0 0 0-1.41L14.42 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L12.3 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01"},[]),h('path',{d:"M11.7 17.29a.996.996 0 0 0 0-1.41L7.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L5.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.38.38 1.01.38 1.4-.01"},[])]);
return h('svg',{"viewBox":c ? '5 6 14 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"},[]),h('path',{d:"m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"},[])]);
        }
    });
})();

export default IMaterialKeyboardDoubleArrowLeft;
</script>