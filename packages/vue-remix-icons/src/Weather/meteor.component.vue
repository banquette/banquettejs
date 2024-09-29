<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMeteor = /* @__PURE__ */ ((_) => {
    return r('meteor', {
        name: 'i-remix-meteor',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-2 3.122-7 3.224v-2.43L8.597 6.881a7 7 0 0 0-3.592 5.845L5 13a7 7 0 0 0 13.996.24L19 13zM12 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-9 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10"},[])]);
        }
    });
})();

export default IRemixMeteor;
</script>