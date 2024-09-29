<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDifference = /* @__PURE__ */ ((_) => {
    return r('difference', {
        name: 'i-material-difference',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.17 3H8v14h11V7.83zm2.33 12h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z","opacity":"0.3"},[]),h('path',{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM14.5 7V5h-2v2h-2v2h2v2h2V9h2V7zm2 6h-6v2h6zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm4 16H8V3h6.17L19 7.83z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 23H2V7h2v14h14zM15 1H6.01L6 19h15V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 7c.55 0 1 .45 1 1v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V8c0-.55.45-1 1-1m12.59-5.41c-.38-.38-.89-.59-1.42-.59H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41zM15.5 15h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m0-6h-1v1c0 .55-.45 1-1 1s-1-.45-1-1V9h-1c-.55 0-1-.45-1-1s.45-1 1-1h1V6c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM14.5 7V5h-2v2h-2v2h2v2h2V9h2V7zm2 6h-6v2h6zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm4 16H8V3h6.17L19 7.83z"},[])]);
return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z"},[])]);
        }
    });
})();

export default IMaterialDifference;
</script>