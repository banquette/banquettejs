<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTurnedIn = /* @__PURE__ */ ((_) => {
    return r('turned-in', {
        name: 'i-material-turned-in',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2m0 14.97-4.21-1.81-.79-.34-.79.34L7 17.97V5h10z"},[]),h('path',{d:"m7 17.97 4.21-1.81.79-.34.79.34L17 17.97V5H7z","opacity":"0.3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5v18l7-3 7 3z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"},[])]);
        }
    });
})();

export default IMaterialTurnedIn;
</script>