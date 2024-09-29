<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixWubiInput = /* @__PURE__ */ ((_) => {
    return r('wubi-input', {
        name: 'i-remix-wubi-input',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2zm13-9H9.927l-1.235 7H16z"},[])]);
        }
    });
})();

export default IRemixWubiInput;
</script>