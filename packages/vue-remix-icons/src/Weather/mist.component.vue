<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMist = /* @__PURE__ */ ((_) => {
    return r('mist', {
        name: 'i-remix-mist',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 4 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 4h4v2H4zm12 15h4v2h-4zM2 9h5v2H2zm7 0h3v2H9zm5 0h6v2h-6zM4 14h6v2H4zm8 0h3v2h-3zm5 0h5v2h-5zM10 4h12v2H10zM2 19h12v2H2z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 4h4v2H4zm12 15h4v2h-4zM2 9h10v2H2zm12 0h6v2h-6zM4 14h6v2H4zm8 0h10v2H12zM10 4h12v2H10zM2 19h12v2H2z"},[])]);
        }
    });
})();

export default IRemixMist;
</script>