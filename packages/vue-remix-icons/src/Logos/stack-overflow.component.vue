<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('stack-overflow', {
        name: 'i-remix-stack-overflow',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2.22 16 19.78' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 20.002V15h2v7.002H4V15h2v5.002h12zM7.5 18v-2h9v2h-9zm.077-4.38.347-1.97 8.864 1.563-.348 1.97-8.863-1.563zm1.634-5.504 1-1.732 7.794 4.5-1 1.732-7.794-4.5zm3.417-4.613 1.532-1.286 5.785 6.895-1.532 1.285-5.785-6.894z"},[])]);
return h('svg',{"viewBox":c ? '4 2.14 16.66 19.86' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 20.002V14.67h2v7.333H4V14.67h2v5.333h12zM7.599 14.736l.313-1.98 8.837 1.7-.113 1.586-9.037-1.306zm1.2-4.532.732-1.6 7.998 3.733-.733 1.599-7.998-3.732zm2.265-3.932 1.133-1.333 6.798 5.665-1.133 1.333-6.798-5.665zm4.332-4.132 5.265 7.064-1.4 1.067-5.264-7.065 1.4-1.066zM7.332 18.668v-2h9.33v2h-9.33z"},[])]);
        }
    });
})();
</script>