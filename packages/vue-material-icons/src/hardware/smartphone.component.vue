<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('smartphone', {
        name: 'i-material-smartphone',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 5h10v14H7z","opacity":"0.3"},[]),h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 1v22h14V1H5zm12 18H7V5h10v14z"},[])]);
return h('svg',{"viewBox":c ? '5 1 14 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"},[])]);
        }
    });
})();
</script>