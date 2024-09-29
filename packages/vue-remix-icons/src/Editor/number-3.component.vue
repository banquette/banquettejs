<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNumber3 = /* @__PURE__ */ ((_) => {
    return r('number-3', {
        name: 'i-remix-number-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5.69 2 12.81 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2v1.362L12.809 9.55a6.501 6.501 0 1 1-7.116 8.028l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-6.505-4.03l-.228.122-.69-1.207L14.855 4H6.5V2z"},[])]);
        }
    });
})();

export default IRemixNumber3;
</script>