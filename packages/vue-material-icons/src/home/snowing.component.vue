<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSnowing = /* @__PURE__ */ ((_) => {
    return r('snowing', {
        name: 'i-material-snowing',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '4.75 4.75 14.5 14.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M4.75 6a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m12 8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m-9 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 4a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m3 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0-8a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0"},[])]);
        }
    });
})();

export default IMaterialSnowing;
</script>