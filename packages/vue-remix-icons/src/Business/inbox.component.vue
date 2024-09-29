<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixInbox = /* @__PURE__ */ ((_) => {
    return r('inbox', {
        name: 'i-remix-inbox',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 11h-3.416a5.001 5.001 0 0 1-9.168 0H4v5h16zm0-2V5H4v7h5a3 3 0 0 0 6 0z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6 9a3 3 0 0 0 6 0h5V5H4v7z"},[])]);
        }
    });
})();

export default IRemixInbox;
</script>