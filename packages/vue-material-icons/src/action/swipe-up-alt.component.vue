<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSwipeUpAlt = /* @__PURE__ */ ((_) => {
    return r('swipe-up-alt', {
        name: 'i-material-swipe-up-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '7 2 10 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"15",r:"3","opacity":"0.3"},[]),h('path',{d:"m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '7 2 10 17.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13 5.41.88.88a.996.996 0 1 0 1.41-1.41L12.7 2.29a.996.996 0 0 0-1.41 0L8.71 4.88a.996.996 0 1 0 1.41 1.41l.88-.88v4.27a5 5 0 1 0 2 0z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '7 2 10 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"},[])]);
return h('svg',{"viewBox":c ? '7 2 10 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m13 5.83 1.59 1.59L16 6l-4-4-4 4 1.41 1.41L11 5.83v4.27a5 5 0 1 0 2 0z"},[])]);
        }
    });
})();

export default IMaterialSwipeUpAlt;
</script>