<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTurnSharpRight = /* @__PURE__ */ ((_) => {
    return r('turn-sharp-right', {
        name: 'i-material-turn-sharp-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '6 3 15 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 6.83 1.59 1.58L21 7l-4-4-4 4 1.41 1.41L16 6.83V13H6v8h2v-6h10z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 3.42 14.59 17.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 6.83-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L20.3 6.3a.996.996 0 1 1-1.41 1.41L18 6.83V13c0 1.1-.9 2-2 2H8v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-1.1.9-2 2-2h8z"},[])]);
return h('svg',{"viewBox":c ? '6 3 15 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 6.83 1.59 1.59L21 7l-4-4-4 4 1.41 1.41L16 6.83V13H8c-1.1 0-2 .9-2 2v6h2v-6h8c1.1 0 2-.9 2-2z"},[])]);
        }
    });
})();

export default IMaterialTurnSharpRight;
</script>