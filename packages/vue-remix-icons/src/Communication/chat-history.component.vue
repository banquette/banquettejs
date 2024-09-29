<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatHistory = /* @__PURE__ */ ((_) => {
    return r('chat-history', {
        name: 'i-remix-chat-history',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-7.06 11.766l.35.654-.656 2.946 2.948-.654.653.349A7.95 7.95 0 0 0 12 20a8 8 0 0 0 0-16m1 3v5h4v2h-6V7z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2m1 5h-2v7h6v-2h-4z"},[])]);
        }
    });
})();

export default IRemixChatHistory;
</script>