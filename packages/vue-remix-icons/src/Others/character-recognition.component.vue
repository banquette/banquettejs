<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCharacterRecognition = /* @__PURE__ */ ((_) => {
    return r('character-recognition', {
        name: 'i-remix-character-recognition',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15v4h4v2H3v-6zm16 0v6h-6v-2h4v-4zm-8.001-9 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11zm-1 2.885L10.752 12h2.492zM9 3v2H5v4H3V3zm12 0v6h-2V5h-4V3z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3v18H3V3zm-8.001 3h-2L6.6 17h2.154l1.199-3h4.09l1.201 3h2.155zm-1 2.885L13.244 12h-2.492z"},[])]);
        }
    });
})();

export default IRemixCharacterRecognition;
</script>