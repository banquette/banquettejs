<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixVideoChat = /* @__PURE__ */ ((_) => {
    return r('video-chat', {
        name: 'i-remix-video-chat',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 10.25 17 8v6l-3-2.25V14H7V8h7zM5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM14 10.25V8H7v6h7v-2.25L17 14V8z"},[])]);
        }
    });
})();

export default IRemixVideoChat;
</script>