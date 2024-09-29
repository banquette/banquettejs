<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHourglassEmpty = /* @__PURE__ */ ((_) => {
    return r('hourglass-empty', {
        name: 'i-material-hourglass-empty',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18zm-2 14.5V20H8v-3.5l4-4zm0-9-4 4-4-4V4h8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 2c-1.1 0-2 .9-2 2v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2zm8 14.5V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l4-4zm-4-5-4-4V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5z"},[])]);
return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"},[])]);
        }
    });
})();

export default IMaterialHourglassEmpty;
</script>