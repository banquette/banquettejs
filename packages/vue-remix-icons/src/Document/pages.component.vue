<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPages = /* @__PURE__ */ ((_) => {
    return r('pages', {
        name: 'i-remix-pages',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 8v12h14V8zm0-2h14V4H5zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 10h4v4H7zm0 6h10v2H7zm6-5h4v2h-4z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1m1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM7 11v4h4v-4zm0 6v2h10v-2zm6-5v2h4v-2z"},[])]);
        }
    });
})();

export default IRemixPages;
</script>