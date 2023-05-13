<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('blur-off', {
        name: 'i-remix-blur-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.39 0.27 21.21 22.34' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.154 19.568A9 9 0 0 1 5.432 6.846L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04zM6.847 8.262a7 7 0 0 0 9.891 9.89l-9.89-9.89zM20.414 16.2l-1.599-1.599a6.995 6.995 0 0 0-1.865-6.55L12 3.1 9.657 5.443 8.243 4.03 12 .272l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564z"},[])]);
return h('svg',{"viewBox":c ? '1.39 0.27 21.21 22.34' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.432 6.846 1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.038-3.04A9 9 0 0 1 5.432 6.848zM8.243 4.03 12 .272l6.364 6.364a9.002 9.002 0 0 1 2.05 9.564L8.244 4.03z"},[])]);
        }
    });
})();
</script>