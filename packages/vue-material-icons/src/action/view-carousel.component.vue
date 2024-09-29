<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialViewCarousel = /* @__PURE__ */ ((_) => {
    return r('view-carousel', {
        name: 'i-material-view-carousel',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 7h6v10H9z","opacity":"0.3"},[]),h('path',{d:"M2 7h4v10H2zm5 12h10V5H7zM9 7h6v10H9zm9 0h4v10h-4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1m5 12h8c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1M19 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 7h4v10H2zm5 12h10V5H7zM9 7h6v10H9zm9 0h4v10h-4z"},[])]);
return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 7h4v10H2zm5 12h10V5H7zM18 7h4v10h-4z"},[])]);
        }
    });
})();

export default IMaterialViewCarousel;
</script>