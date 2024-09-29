<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBarcodeReader = /* @__PURE__ */ ((_) => {
    return r('barcode-reader', {
        name: 'i-material-barcode-reader',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 8.75h-4v-1.5h4zm-.38-4.38L22 3l-3.62 1.63L19 6zM19 10l-.62 1.37L22 13l.62-1.37zm-8 3c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H9.64l-.74 2.78A3 3 0 0 1 6 22a2.995 2.995 0 0 1-2.9-3.77l1.82-6.8A4.03 4.03 0 0 1 3 8c0-2.21 1.79-4 4-4h8c1.49 0 2.45 1.56 1.79 2.89l-2 4C14.45 11.57 13.75 12 13 12h-2.02l-.27 1z"},[])]);
        }
    });
})();

export default IMaterialBarcodeReader;
</script>