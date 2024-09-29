<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialViewHeadline = /* @__PURE__ */ ((_) => {
    return r('view-headline', {
        name: 'i-material-view-headline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '4 5 16 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m0 4h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1m0-8h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1M4 6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1"},[])]);
return h('svg',{"viewBox":c ? '4 5 16 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 15h16v-2H4zm0 4h16v-2H4zm0-8h16V9H4zm0-6v2h16V5z"},[])]);
        }
    });
})();

export default IMaterialViewHeadline;
</script>