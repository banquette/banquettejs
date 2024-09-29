<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSdCardMini = /* @__PURE__ */ ((_) => {
    return r('sd-card-mini', {
        name: 'i-remix-sd-card-mini',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 4v5.793a2.5 2.5 0 0 1-.73 1.765L6 12.833V20h12V4zM7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.706l1.562-1.568A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 3h2v4h-2zm-3 0h2v4h-2zM9 5h2v4H9z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.58a1 1 0 0 1 .292-.706l1.562-1.568A.5.5 0 0 0 6 9.793V3a1 1 0 0 1 1-1m8 2v4h2V4zm-3 0v4h2V4zM9 4v4h2V4z"},[])]);
        }
    });
})();

export default IRemixSdCardMini;
</script>