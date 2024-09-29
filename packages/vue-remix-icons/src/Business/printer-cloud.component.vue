<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPrinterCloud = /* @__PURE__ */ ((_) => {
    return r('printer-cloud', {
        name: 'i-remix-printer-cloud',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1l.001 5.346a5.5 5.5 0 0 0-2-1.745L20 9H4v8h2v-1a1 1 0 0 1 1-1h5.207l-.071.283-.03.02A4.76 4.76 0 0 0 10.567 17H8v3h2.06a4.7 4.7 0 0 0 .817 2H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm.5 11a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5m0 2a1.5 1.5 0 0 0-1.473 1.215l-.02.14L16 16.5v1.62l-1.444.406a.75.75 0 0 0 .08 1.466l.109.008h5.51a.75.75 0 0 0 .19-1.474l-1.013-.283L19 18.12V16.5l-.007-.144A1.5 1.5 0 0 0 17.5 15M8 10v2H5v-2zm8-6H8v3h8z"},[])]);
return h('svg',{"viewBox":c ? '2 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.566 17A4.74 4.74 0 0 0 10 19.25c0 1.023.324 1.973.877 2.75H7v-5zm6.934-4a3.5 3.5 0 0 1 3.5 3.5l-.001.103a2.75 2.75 0 0 1-.581 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 0 1-.579-5.392L14 16.5a3.5 3.5 0 0 1 3.5-3.5M21 8a1 1 0 0 1 1 1l.001 4.346A5.48 5.48 0 0 0 17.5 11l-.221.004A5.5 5.5 0 0 0 12.207 15H5v5H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM8 10H5v2h3zm9-8a1 1 0 0 1 1 1v3H6V3a1 1 0 0 1 1-1z"},[])]);
        }
    });
})();

export default IRemixPrinterCloud;
</script>