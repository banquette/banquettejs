<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterial4gPlusMobiledata = /* @__PURE__ */ ((_) => {
    return r('4g-plus-mobiledata', {
        name: 'i-material-4g-plus-mobiledata',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 7 23 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 11v2h2v2h-4V9h6V7H9v10h8v-6zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 7 23 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 9c.55 0 1-.45 1-1s-.45-1-1-1h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v2h-4V9zm7 2h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1M7 12V8c0-.55-.45-1-1-1s-1 .45-1 1v4H3V8c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h3v2c0 .55.45 1 1 1s1-.45 1-1v-2c.55 0 1-.45 1-1s-.45-1-1-1"},[])]);
return h('svg',{"viewBox":c ? '1 7 23 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 11v2h2v2h-4V9h6c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4zm11 0h-2V9h-2v2h-2v2h2v2h2v-2h2zM7 7H5v5H3V7H1v7h4v3h2v-3h1v-2H7z"},[])]);
        }
    });
})();

export default IMaterial4gPlusMobiledata;
</script>