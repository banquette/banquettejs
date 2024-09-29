<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCheck = /* @__PURE__ */ ((_) => {
    return r('check', {
        name: 'i-material-check',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.83 6.01 16.76 12.57' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"},[])]);
return h('svg',{"viewBox":c ? '3.41 5.59 17.59 13.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"},[])]);
        }
    });
})();

export default IMaterialCheck;
</script>