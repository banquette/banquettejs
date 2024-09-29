<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAddBusiness = /* @__PURE__ */ ((_) => {
    return r('add-business', {
        name: 'i-material-add-business',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 4 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.36 9H3.64l-.6 3h12.92z","opacity":"0.3"},[]),h('path',{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6 .6-3h11.72l.6 3z"},[]),h('path',{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.82 4 22.18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 6h13c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1m12 11h2v-3h.18c.63 0 1.1-.58.98-1.2l-1-5c-.09-.46-.5-.8-.98-.8H2.82c-.48 0-.89.34-.98.8l-1 5c-.12.62.35 1.2.98 1.2H2v5c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-5h4zm-6 1H4v-4h5z"},[]),h('path',{d:"M22 18h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 4 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zm-5.96-6 .6-3h11.72l.6 3z"},[]),h('path',{d:"M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z"},[])]);
return h('svg',{"viewBox":c ? '1 4 22 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zM2 4h15v2H2z"},[]),h('path',{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},[])]);
        }
    });
})();

export default IMaterialAddBusiness;
</script>