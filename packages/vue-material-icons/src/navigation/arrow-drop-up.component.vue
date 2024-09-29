<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialArrowDropUp = /* @__PURE__ */ ((_) => {
    return r('arrow-drop-up', {
        name: 'i-material-arrow-drop-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '8.41 9.41 7.18 4.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.71 12.29 11.3 9.7a.996.996 0 0 1 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71"},[])]);
return h('svg',{"viewBox":c ? '7 9 10 5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7 14 5-5 5 5z"},[])]);
        }
    });
})();

export default IMaterialArrowDropUp;
</script>