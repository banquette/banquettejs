<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixVoiceprint = /* @__PURE__ */ ((_) => {
    return r('voiceprint', {
        name: 'i-remix-voiceprint',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 7h2v10H5zm-4 3h2v4H1zm8-8h2v18H9zm4 2h2v18h-2zm4 3h2v10h-2zm4 3h2v4h-2z"},[])]);
        }
    });
})();

export default IRemixVoiceprint;
</script>