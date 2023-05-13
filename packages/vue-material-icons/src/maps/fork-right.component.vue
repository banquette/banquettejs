<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('fork-right', {
        name: 'i-material-fork-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6.42 3.42 13.17 17.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 20c0 .55.45 1 1 1s1-.45 1-1v-3c.73-2.58 3.07-3.47 5.17-3l-.88.88a.996.996 0 1 0 1.41 1.41l2.59-2.59a.996.996 0 0 0 0-1.41L16.7 9.7a.996.996 0 1 0-1.41 1.41l.88.89c-1.51-.33-3.73.08-5.17 1.36V6.83l.88.88a.996.996 0 1 0 1.41-1.41L10.7 3.71a.996.996 0 0 0-1.41 0L6.71 6.29A.996.996 0 1 0 8.12 7.7L9 6.83V20z"},[])]);
return h('svg',{"viewBox":c ? '6 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.59 15.59 16 17l4-4-4-4-1.41 1.41L16.17 12c-1.51-.33-3.73.08-5.17 1.36V6.83l1.59 1.59L14 7l-4-4-4 4 1.41 1.41L9 6.83V21h2v-4c.73-2.58 3.07-3.47 5.17-3l-1.58 1.59z"},[])]);
        }
    });
})();
</script>