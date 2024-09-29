<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFilter = /* @__PURE__ */ ((_) => {
    return r('filter', {
        name: 'i-remix-filter',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 4 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4zM6.404 6 11 12.894V20h2v-7.106L17.596 6z"},[])]);
return h('svg',{"viewBox":c ? '3 4 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z"},[])]);
        }
    });
})();

export default IRemixFilter;
</script>