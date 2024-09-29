<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatSmile3 = /* @__PURE__ */ ((_) => {
    return r('chat-smile-3', {
        name: 'i-remix-chat-smile-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.97 9.97 0 0 1 2 12m4.828 8H12a8 8 0 1 0-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414zM8 13h8a4 4 0 1 1-8 0"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.929 19.071A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2zM8 13a4 4 0 1 0 8 0z"},[])]);
        }
    });
})();

export default IRemixChatSmile3;
</script>