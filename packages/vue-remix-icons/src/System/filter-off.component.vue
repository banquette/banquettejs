<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('filter-off', {
        name: 'i-remix-filter-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 0.52 18.07 21.48' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.929.515 21.07 14.657l-1.414 1.414-3.823-3.822L15 13.5V22H9v-8.5L4 6H3V4h4.585l-2.07-2.071L6.929.515zM9.585 6H6.404L11 12.894V20h2v-7.106l1.392-2.087L9.585 6zM21 4v2h-1l-1.915 2.872-1.442-1.443L17.596 6h-2.383l-2-2H21z"},[])]);
return h('svg',{"viewBox":c ? '3 0.52 18.07 21.48' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.929.515 21.07 14.657l-1.414 1.414-3.823-3.822L14 15v7h-4v-7L4 6H3V4h4.585l-2.07-2.071L6.929.515zM21 4v2h-1l-1.915 2.872L13.213 4H21z"},[])]);
        }
    });
})();
</script>