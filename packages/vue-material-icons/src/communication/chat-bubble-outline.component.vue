<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialChatBubbleOutline = /* @__PURE__ */ ((_) => {
    return r('chat-bubble-outline', {
        name: 'i-material-chat-bubble-outline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 18.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4v12H5.17L4 17.17V4zm0-2H4c-1.1 0-2 .9-2 2v15.59c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"},[])]);
        }
    });
})();

export default IMaterialChatBubbleOutline;
</script>