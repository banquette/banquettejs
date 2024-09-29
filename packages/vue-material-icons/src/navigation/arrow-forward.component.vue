<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialArrowForward = /* @__PURE__ */ ((_) => {
    return r('arrow-forward', {
        name: 'i-material-arrow-forward',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 4.41 15.58 15.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"},[])]);
return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"},[])]);
        }
    });
})();

export default IMaterialArrowForward;
</script>