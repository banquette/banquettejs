<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialKeyboardArrowUp = /* @__PURE__ */ ((_) => {
    return r('keyboard-arrow-up', {
        name: 'i-material-keyboard-arrow-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6.41 8.42 11.17 6.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.12 14.71 12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0"},[])]);
return h('svg',{"viewBox":c ? '6 8 12 7.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"},[])]);
        }
    });
})();

export default IMaterialKeyboardArrowUp;
</script>