<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialKeyboardArrowDown = /* @__PURE__ */ ((_) => {
    return r('keyboard-arrow-down', {
        name: 'i-material-keyboard-arrow-down',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6.41 9 11.17 6.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.12 9.29 12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"},[])]);
return h('svg',{"viewBox":c ? '6 8.59 12 7.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"},[])]);
        }
    });
})();

export default IMaterialKeyboardArrowDown;
</script>