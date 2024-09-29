<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialExposurePlus1 = /* @__PURE__ */ ((_) => {
    return r('exposure-plus-1', {
        name: 'i-material-exposure-plus-1',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 5 16 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18V5h-.3L15 6.7v1.7l3-1.02V18zm-10-1v-4h4v-2h-4V7H8v4H4v2h4v4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 5 16 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 7c-.55 0-1 .45-1 1v3H5c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m11 11h-2V7.38L15 8.4V6.7L19.7 5h.3z"},[])]);
return h('svg',{"viewBox":c ? '4 5 16 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 7H8v4H4v2h4v4h2v-4h4v-2h-4zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3z"},[])]);
        }
    });
})();

export default IMaterialExposurePlus1;
</script>