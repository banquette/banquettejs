<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatCheck = /* @__PURE__ */ ((_) => {
    return r('chat-check', {
        name: 'i-remix-chat-check',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zm5.53-4.879 4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm4.838-6.879L8.818 9.646l-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414z"},[])]);
        }
    });
})();

export default IRemixChatCheck;
</script>