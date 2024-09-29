<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialArrowRight = /* @__PURE__ */ ((_) => {
    return r('arrow-right', {
        name: 'i-material-arrow-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '10 8.41 4.59 7.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11.71 15.29 2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71"},[])]);
return h('svg',{"viewBox":c ? '10 7 5 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10 17 5-5-5-5z"},[])]);
        }
    });
})();

export default IMaterialArrowRight;
</script>