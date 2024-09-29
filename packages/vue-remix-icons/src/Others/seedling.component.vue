<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSeedling = /* @__PURE__ */ ((_) => {
    return r('seedling', {
        name: 'i-remix-seedling',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 3a7 7 0 0 1 6.913 5.895A6.48 6.48 0 0 1 17.5 7H22v2.5a6.5 6.5 0 0 1-6.5 6.5H13v5h-2v-8H9a7 7 0 0 1-7-7V3zm14 6h-2.5a4.5 4.5 0 0 0-4.5 4.5v.5h2.5A4.5 4.5 0 0 0 20 9.5zM6 5H4v1a5 5 0 0 0 5 5h2v-1a5 5 0 0 0-5-5"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7v2.5a6.5 6.5 0 0 1-6.5 6.5H13v5h-2v-7l.019-1A6.5 6.5 0 0 1 17.5 7zM6 3a7 7 0 0 1 6.643 4.786A7.48 7.48 0 0 0 10.016 13H9a7 7 0 0 1-7-7V3z"},[])]);
        }
    });
})();

export default IRemixSeedling;
</script>