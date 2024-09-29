<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialChevronLeft = /* @__PURE__ */ ((_) => {
    return r('chevron-left', {
        name: 'i-material-chevron-left',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '8.42 6.42 6.59 11.17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"},[])]);
return h('svg',{"viewBox":c ? '8 6 7.41 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"},[])]);
        }
    });
})();

export default IMaterialChevronLeft;
</script>