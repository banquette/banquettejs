<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('turn-sharp-left', {
        name: 'i-material-turn-sharp-left',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 15 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h10v8h-2v-6H6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.42 3.42 14.58 17.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 6.83.88.88a.996.996 0 1 0 1.41-1.41L7.71 3.71a.996.996 0 0 0-1.41 0L3.71 6.29A.996.996 0 1 0 5.12 7.7L6 6.83V13c0 1.1.9 2 2 2h8v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-1.1-.9-2-2-2H8V6.83z"},[])]);
return h('svg',{"viewBox":c ? '3 3 15 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h8c1.1 0 2 .9 2 2v6h-2v-6H8c-1.1 0-2-.9-2-2V6.83z"},[])]);
        }
    });
})();
</script>