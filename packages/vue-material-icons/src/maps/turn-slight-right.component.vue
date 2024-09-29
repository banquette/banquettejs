<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTurnSlightRight = /* @__PURE__ */ ((_) => {
    return r('turn-slight-right', {
        name: 'i-material-turn-slight-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '9 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '9 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.34 5c0-.55.45-1 1-1H17c.55 0 1 .45 1 1v3.66c0 .55-.45 1-1 1s-1-.45-1-1V7.41l-5 5V19c0 .55-.45 1-1 1s-1-.45-1-1v-6.58c0-.53.21-1.04.59-1.41l5-5h-1.24A1.02 1.02 0 0 1 12.34 5"},[])]);
return h('svg',{"viewBox":c ? '9 4 9 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-7.58c0-.53.21-1.04.59-1.41l5-5h-2.25z"},[])]);
        }
    });
})();

export default IMaterialTurnSlightRight;
</script>