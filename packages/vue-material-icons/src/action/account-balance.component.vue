<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAccountBalance = /* @__PURE__ */ ((_) => {
    return r('account-balance', {
        name: 'i-material-account-balance',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 1 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6.29 6 5.21-2.74L16.71 6z","opacity":"0.3"},[]),h('path',{d:"M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-9L2 6v2h19V6zM6.29 6l5.21-2.74L16.71 6z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 19 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 10v7h3v-7zm6 0v7h3v-7zM2 22h19v-3H2zm14-12v7h3v-7zm-4.5-9L2 6v2h19V6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 1.26 19 20.74' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 11.5v4c0 .83.67 1.5 1.5 1.5S7 16.33 7 15.5v-4c0-.83-.67-1.5-1.5-1.5S4 10.67 4 11.5m6 0v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5M3.5 22h16c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5S2.67 22 3.5 22M16 11.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5M10.57 1.49l-7.9 4.16c-.41.21-.67.64-.67 1.1C2 7.44 2.56 8 3.25 8h16.51C20.44 8 21 7.44 21 6.75c0-.46-.26-.89-.67-1.1l-7.9-4.16c-.58-.31-1.28-.31-1.86 0"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 1 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-6.74L16.71 6H6.29zm0-2.26L2 6v2h19V6z"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"},[])]);
        }
    });
})();

export default IMaterialAccountBalance;
</script>