<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('swipe-left-alt', {
        name: 'i-material-swipe-left-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"15","cy":"12",r:"3","opacity":"0.3"},[]),h('path',{d:"M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.42 7 17.58 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.1 13a5 5 0 1 0 0-2H5.83l.88-.88A.996.996 0 1 0 5.3 8.71L2.71 11.3a.996.996 0 0 0 0 1.41L5.3 15.3a.996.996 0 1 0 1.41-1.41L5.83 13h4.27z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"},[])]);
return h('svg',{"viewBox":c ? '2 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27z"},[])]);
        }
    });
})();
</script>