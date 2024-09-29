<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialWoman = /* @__PURE__ */ ((_) => {
    return r('woman', {
        name: 'i-material-woman',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.41 7h-2.82L7 16h3v6h4v-6h3z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '7.46 2 9.06 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"4",r:"2"},[]),h('path',{d:"m16.45 14.63-2.52-6.32c-.32-.79-1.08-1.3-1.94-1.31-.85 0-1.62.51-1.94 1.31l-2.52 6.32c-.25.66.24 1.37.94 1.37H10v5c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5h1.53c.7 0 1.19-.71.92-1.37"},[])]);
return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L7 16h3v6h4v-6h3z"},[]),h('circle',{"cx":"12","cy":"4",r:"2"},[])]);
        }
    });
})();

export default IMaterialWoman;
</script>