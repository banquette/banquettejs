<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShirt = /* @__PURE__ */ ((_) => {
    return r('shirt', {
        name: 'i-remix-shirt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 20h6v-4h-4v-2h4V6h-2v5l-4-1.6zm-2 0V9.4L7 11V6H5v14zM7 4V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4 3.5-3h-7z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 4v7l5-2.5 5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4L7.5 3h9zm1 3.236-1-.5-1 .5V20h2zM15 14v2h4v-2z"},[])]);
        }
    });
})();

export default IRemixShirt;
</script>