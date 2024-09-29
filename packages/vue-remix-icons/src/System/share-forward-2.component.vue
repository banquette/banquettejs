<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShareForward2 = /* @__PURE__ */ ((_) => {
    return r('share-forward-2', {
        name: 'i-remix-share-forward-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.64 20 19.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zM16.172 7l-3.95-3.95 1.414-1.414L20 8l-6.364 6.364-1.414-1.414L16.172 9H5V7z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 19h16v-5h2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6h2zm8-9H9a6 6 0 0 0-4.854 2.473A8 8 0 0 1 12 6V2l8 6-8 6z"},[])]);
        }
    });
})();

export default IRemixShareForward2;
</script>