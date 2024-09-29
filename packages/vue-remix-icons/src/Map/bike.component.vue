<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBike = /* @__PURE__ */ ((_) => {
    return r('bike', {
        name: 'i-remix-bike',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956zM5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8m13-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956zM5 21a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m13 3a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
        }
    });
})();

export default IRemixBike;
</script>