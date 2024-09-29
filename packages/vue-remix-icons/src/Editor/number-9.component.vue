<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNumber9 = /* @__PURE__ */ ((_) => {
    return r('number-9', {
        name: 'i-remix-number-9',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5.51 1.5 13 20.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 1.5a6.5 6.5 0 0 1 5.619 9.77l-6.196 10.729H9.114l4.439-7.686A6.5 6.5 0 1 1 12 1.5m0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"},[])]);
        }
    });
})();

export default IRemixNumber9;
</script>