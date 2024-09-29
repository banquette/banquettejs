<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMarkEmailUnread = /* @__PURE__ */ ((_) => {
    return r('mark-email-unread', {
        name: 'i-material-mark-email-unread',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6h10.1c.22 1.07.79 2 1.57 2.71L12 11zm0 2v10h16V9.9a4.84 4.84 0 0 1-2.7-.22L12 13z","opacity":"0.3"},[]),h('path',{d:"M20 9.9c.74-.15 1.42-.48 2-.92V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4l8 5 3.67-2.29c.47.43 1.02.76 1.63.98L12 13 4 8v10h16zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 8.98V20H2V4h12.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02M16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 10c1.13 0 2.16-.39 3-1.02V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 5.3 6.81a.85.85 0 1 0-.9 1.44l7.07 4.42c.32.2.74.2 1.06 0l4.77-2.98c.54.19 1.1.31 1.7.31m-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2l.01-12c0-1.1.89-2 1.99-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4l8 5 3.67-2.29c.47.43 1.02.76 1.63.98L12 13 4 8v10h16V9.9c.74-.15 1.42-.48 2-.92M16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 8.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1 0 1.48.65 2.79 1.67 3.71L12 11 4 6v2l8 5 5.3-3.32c.54.2 1.1.32 1.7.32 1.13 0 2.16-.39 3-1.02M16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
        }
    });
})();

export default IMaterialMarkEmailUnread;
</script>