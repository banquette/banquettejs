<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMarkChatUnread = /* @__PURE__ */ ((_) => {
    return r('mark-chat-unread', {
        name: 'i-material-mark-chat-unread',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 16h16V7.9A5 5 0 0 1 14.1 4H4z","opacity":"0.3"},[]),h('path',{d:"M20 7.9c.74-.15 1.42-.48 2-.92V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4v12h16zM16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 6.98V18H6l-4 4V2h12.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02M16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 6.98V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4v12h16V7.9c.74-.15 1.42-.48 2-.92M16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
return h('svg',{"viewBox":c ? '2 0 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 6.98V16c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h10.1A5.002 5.002 0 0 0 19 8c1.13 0 2.16-.39 3-1.02M16 3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3"},[])]);
        }
    });
})();

export default IMaterialMarkChatUnread;
</script>