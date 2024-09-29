<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatPrivate = /* @__PURE__ */ ((_) => {
    return r('chat-private', {
        name: 'i-remix-chat-private',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-7.06 11.766l.35.654-.656 2.946 2.948-.654.653.349A7.95 7.95 0 0 0 12 20a8 8 0 0 0 0-16m0 3a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v1h4zm-2-4c-.552 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2m0 5c-1.598 0-3 1.34-3 3v1H8v5h8v-5h-1v-1a3 3 0 0 0-3-3m2 6v1h-4v-1zm-2-4c.476 0 1 .49 1 1v1h-2v-1c0-.51.487-1 1-1"},[])]);
        }
    });
})();

export default IRemixChatPrivate;
</script>