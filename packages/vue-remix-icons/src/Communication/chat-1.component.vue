<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('chat-1', {
        name: 'i-remix-chat-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8z"},[])]);
        }
    });
})();
</script>