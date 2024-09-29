<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialArrowDropDown = /* @__PURE__ */ ((_) => {
    return r('arrow-drop-down', {
        name: 'i-material-arrow-drop-down',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '8.41 10 7.18 4.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.71 11.71 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71"},[])]);
return h('svg',{"viewBox":c ? '7 10 10 5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7 10 5 5 5-5z"},[])]);
        }
    });
})();

export default IMaterialArrowDropDown;
</script>