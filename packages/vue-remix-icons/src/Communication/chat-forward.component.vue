<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatForward = /* @__PURE__ */ ((_) => {
    return r('chat-forward', {
        name: 'i-remix-chat-forward',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385 5.763 17H20V5H4zM12 10V7l4 4-4 4v-3H8v-2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM12 10H8v2h4v3l4-4-4-4z"},[])]);
        }
    });
})();

export default IRemixChatForward;
</script>