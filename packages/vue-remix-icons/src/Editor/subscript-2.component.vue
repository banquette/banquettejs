<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSubscript2 = /* @__PURE__ */ ((_) => {
    return r('subscript-2', {
        name: 'i-remix-subscript-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 6v13H9V6H3V4h14v2zm8.55 10.58a.8.8 0 1 0-1.32-.36l-1.154.33A2 2 0 0 1 19 14a2 2 0 0 1 1.373 3.454L18.744 19H21v1h-4v-1z"},[])]);
        }
    });
})();

export default IRemixSubscript2;
</script>