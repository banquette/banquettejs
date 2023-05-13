<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('sell', {
        name: 'i-material-sell',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 4v7.17L12.83 20 20 12.83 11.17 4H4zm2.5 4C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z","opacity":"0.3"},[]),h('path',{d:"m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM12.83 20 4 11.17V4h7.17L20 12.83 12.83 20z"},[]),h('circle',{"cx":"6.5","cy":"6.5",r:"1.5"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20.83 20.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22.83 12.83 12 2H2v10l10.83 10.83 10-10zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM12.83 20 4 11.17V4h7.17L20 12.83 12.83 20z"},[]),h('circle',{"cx":"6.5","cy":"6.5",r:"1.5"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM6.5 8C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z"},[])]);
        }
    });
})();
</script>