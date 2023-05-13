<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('expand-more', {
        name: 'i-material-expand-more',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6.42 9 11.17 6.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.88 9.29 12 13.17 8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '6 8.59 12 7.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"},[])]);
return h('svg',{"viewBox":c ? '6 8.59 12 7.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"},[])]);
        }
    });
})();
</script>