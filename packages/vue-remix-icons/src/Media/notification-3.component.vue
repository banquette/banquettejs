<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('notification-3', {
        name: 'i-remix-notification-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zM9 21h6v2H9v-2z"},[])]);
        }
    });
})();
</script>