<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatNew = /* @__PURE__ */ ((_) => {
    return r('chat-new', {
        name: 'i-remix-chat-new',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 0 22 22.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z"},[])]);
        }
    });
})();

export default IRemixChatNew;
</script>