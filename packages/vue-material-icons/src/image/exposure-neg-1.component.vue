<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('exposure-neg-1', {
        name: 'i-material-exposure-neg-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 5 15 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 18V5h-.3L14 6.7v1.7l3-1.02V18zM4 11h8v2H4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 5 15 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1zm15 6h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"},[])]);
return h('svg',{"viewBox":c ? '4 5 15 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"},[])]);
        }
    });
})();
</script>