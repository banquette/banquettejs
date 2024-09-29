<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFontSize = /* @__PURE__ */ ((_) => {
    return r('font-size', {
        name: 'i-remix-font-size',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0.6 4 22.4 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154zm-.8-2L8 6.885 5.554 13zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93M19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixFontSize;
</script>