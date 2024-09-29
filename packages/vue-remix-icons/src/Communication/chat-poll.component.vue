<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatPoll = /* @__PURE__ */ ((_) => {
    return r('chat-poll', {
        name: 'i-remix-chat-poll',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-7 2v8h-2V7zm4 2v6h-2V9zm-8 2v4H7v-4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-8 4h-2v8h2zm4 2h-2v6h2zm-8 2H7v4h2z"},[])]);
        }
    });
})();

export default IRemixChatPoll;
</script>