<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAutoAwesome = /* @__PURE__ */ ((_) => {
    return r('auto-awesome', {
        name: 'i-material-auto-awesome',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.99 11.01 9 8.83l-.99 2.18-2.18.99 2.18.99.99 2.18.99-2.18 2.18-.99z","opacity":"0.3"},[]),h('path',{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18 2.18.99z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.41 1.71 19.88 20.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19.46 8 .79-1.75L22 5.46a.5.5 0 0 0 0-.91l-1.75-.79L19.46 2a.5.5 0 0 0-.91 0l-.79 1.75-1.76.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76c.18.39.74.39.92 0M11.5 9.5 9.91 6c-.35-.78-1.47-.78-1.82 0L6.5 9.5 3 11.09c-.78.36-.78 1.47 0 1.82l3.5 1.59L8.09 18c.36.78 1.47.78 1.82 0l1.59-3.5 3.5-1.59c.78-.36.78-1.47 0-1.82zm7.04 6.5-.79 1.75-1.75.79a.5.5 0 0 0 0 .91l1.75.79.79 1.76a.5.5 0 0 0 .91 0l.79-1.75 1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79-.79-1.76a.508.508 0 0 0-.92 0"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18 2.18.99z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"},[])]);
        }
    });
})();

export default IMaterialAutoAwesome;
</script>