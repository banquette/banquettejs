<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('signal-wifi-error', {
        name: 'i-remix-signal-wifi-error',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996l-1.257 1.556A15.936 15.936 0 0 0 12 5a15.92 15.92 0 0 0-8.419 2.392L12 17.817l6-7.429v3.183L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z"},[])]);
return h('svg',{"viewBox":c ? '0.69 3 22.62 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3c4.284 0 8.22 1.497 11.31 3.996L22.498 8H18v5.571L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z"},[])]);
        }
    });
})();
</script>