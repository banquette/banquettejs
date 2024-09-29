<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTurnRight = /* @__PURE__ */ ((_) => {
    return r('turn-right', {
        name: 'i-material-turn-right',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '7 6 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.17 11-1.58 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H7v11h2v-9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '7 6.41 13.58 13.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.29 13.29c.39.39 1.02.39 1.41 0l2.59-2.59a.996.996 0 0 0 0-1.41L17.7 6.7a.996.996 0 1 0-1.41 1.41l.88.89H9c-1.1 0-2 .9-2 2v8c0 .55.45 1 1 1s1-.45 1-1v-8h8.17l-.88.88a.996.996 0 0 0 0 1.41"},[])]);
return h('svg',{"viewBox":c ? '7 6 14 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.17 11-1.59 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9z"},[])]);
        }
    });
})();

export default IMaterialTurnRight;
</script>