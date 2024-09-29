<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixVoiceRecognition = /* @__PURE__ */ ((_) => {
    return r('voice-recognition', {
        name: 'i-remix-voice-recognition',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15v4h4v2H3v-6zm16 0v6h-6v-2h4v-4zm-8-9v12h-2V6zM9 9v6H7V9zm8 0v6h-2V9zM9 3v2H5v4H3V3zm12 0v6h-2V5h-4V3z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3v18H3V3zm-8 3h-2v12h2zM9 9H7v6h2zm8 0h-2v6h2z"},[])]);
        }
    });
})();

export default IRemixVoiceRecognition;
</script>