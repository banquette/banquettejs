<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('swipe-down-alt', {
        name: 'i-material-swipe-down-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '7 4 10 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"9",r:"3","opacity":"0.3"},[]),h('path',{d:"M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '7 4 10 17.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 13.9a5 5 0 1 0-2 0v4.27l-.88-.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59a.996.996 0 1 0-1.41-1.41l-.89.88V13.9z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '7 4 10 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"},[])]);
return h('svg',{"viewBox":c ? '7 4 10 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17V13.9z"},[])]);
        }
    });
})();
</script>