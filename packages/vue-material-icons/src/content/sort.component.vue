<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSort = /* @__PURE__ */ ((_) => {
    return r('sort', {
        name: 'i-material-sort',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1"},[])]);
return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z"},[])]);
        }
    });
})();

export default IMaterialSort;
</script>