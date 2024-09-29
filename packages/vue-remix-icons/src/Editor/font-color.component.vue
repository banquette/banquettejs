<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFontColor = /* @__PURE__ */ ((_) => {
    return r('font-color', {
        name: 'i-remix-font-color',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154zm-.8-2L12 5.885 9.554 12zM3 20h18v2H3z"},[])]);
        }
    });
})();

export default IRemixFontColor;
</script>