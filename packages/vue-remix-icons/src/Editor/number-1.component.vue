<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNumber1 = /* @__PURE__ */ ((_) => {
    return r('number-1', {
        name: 'i-remix-number-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '7.5 1.5 6.5 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z"},[])]);
        }
    });
})();

export default IRemixNumber1;
</script>