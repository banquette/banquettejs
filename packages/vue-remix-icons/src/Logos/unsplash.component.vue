<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixUnsplash = /* @__PURE__ */ ((_) => {
    return r('unsplash', {
        name: 'i-remix-unsplash',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 10v4h4v-4h7v11H3V10zm-2 2H5v7h14v-7h-3l-.001 4H8zm8-9v6H8V3zm-2 2h-4v2h4z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.5 11v5h7v-5H21v10H3V11zm7-8v5h-7V3z"},[])]);
        }
    });
})();

export default IRemixUnsplash;
</script>