<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialShoppingBasket = /* @__PURE__ */ ((_) => {
    return r('shopping-basket', {
        name: 'i-material-shopping-basket',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 2.02 22 18.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m3.31 11 2.2 8.01L18.5 19l2.2-8zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2","opacity":"0.3"},[]),h('path',{d:"M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M12 4.8 14.8 9H9.2zM18.5 19l-12.99.01L3.31 11H20.7zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0.69 1.99 22.62 19.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.21 9-4.39-6.57a1 1 0 0 0-1.66 0L6.77 9H.69L4 21h16.02l3.29-12zm-5.22-4.21L14.8 9H9.18zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 1.99 22 19.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 9h-4.79l-4.39-6.57a1 1 0 0 0-1.66 0L6.77 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M11.99 4.79 14.8 9H9.18zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 2.02 22 18.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 9h-4.79l-4.38-6.56c-.19-.28-.51-.42-.83-.42s-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M12 4.8 14.8 9H9.2zM18.5 19l-12.99.01L3.31 11H20.7zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"},[])]);
return h('svg',{"viewBox":c ? '1 2.02 22 18.98' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.21 9-4.38-6.56a1 1 0 0 0-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM9 9l3-4.4L15 9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
        }
    });
})();

export default IMaterialShoppingBasket;
</script>