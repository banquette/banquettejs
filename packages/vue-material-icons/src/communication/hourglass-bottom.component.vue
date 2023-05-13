<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('hourglass-bottom', {
        name: 'i-material-hourglass-bottom',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 16.5-4-4-4 4V20h8z","opacity":"0.3"},[]),h('path',{d:"m16 16.5-4-4-4 4V20h8z","opacity":"0.3"},[]),h('path',{d:"M6 22h12v-6l-4-4 3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99V22zM8 7.5V4h8v3.5l-4 4-4-4zm0 9 4-4 4 4V20H8v-3.5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 22c1.1 0 2-.9 2-2l-.01-3.18c0-.53-.21-1.03-.58-1.41L14 12l3.41-3.43c.37-.37.58-.88.58-1.41L18 4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3.16c0 .53.21 1.04.58 1.42L10 12l-3.41 3.4c-.38.38-.59.89-.59 1.42V20c0 1.1.9 2 2 2h8zM8 7.09V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.09c0 .27-.11.52-.29.71L12 11.5 8.29 7.79c-.18-.18-.29-.44-.29-.7z"},[])]);
return h('svg',{"viewBox":c ? '6 2 12 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"},[])]);
        }
    });
})();
</script>