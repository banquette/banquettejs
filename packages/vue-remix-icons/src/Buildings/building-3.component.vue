<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBuilding3 = /* @__PURE__ */ ((_) => {
    return r('building-3', {
        name: 'i-remix-building-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 10.111V1l11 6v14H3V7zm2-5.742v8.82l-7-3.111V19h14V8.187L12 4.37z"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 10.111V1l11 6v14H3V7z"},[])]);
        }
    });
})();

export default IRemixBuilding3;
</script>