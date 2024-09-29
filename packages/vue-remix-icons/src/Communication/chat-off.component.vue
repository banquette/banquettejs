<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixChatOff = /* @__PURE__ */ ((_) => {
    return r('chat-off', {
        name: 'i-remix-chat-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.39 1.39 21.21 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m2.808 1.393 19.799 19.8-1.415 1.414-3.608-3.608L6.455 19 2 22.5V4c0-.17.042-.329.116-.469l-.723-.723zm1.191 4.02L4 18.385 5.763 17h9.821L4 5.412zM21 3a1 1 0 0 1 1 1v13.785l-2-2V5L9.213 4.999 7.214 3z"},[])]);
return h('svg',{"viewBox":c ? '1.39 1.39 21.21 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m2.808 1.393 19.799 19.8-1.415 1.414-3.608-3.608L6.455 19 2 22.5V4c0-.17.042-.329.116-.469l-.723-.723zM21 3a1 1 0 0 1 1 1v13.785L7.214 3z"},[])]);
        }
    });
})();

export default IRemixChatOff;
</script>