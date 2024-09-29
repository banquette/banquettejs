<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterial4gMobiledata = /* @__PURE__ */ ((_) => {
    return r('4g-mobiledata', {
        name: 'i-material-4g-mobiledata',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9zm8 4v2h2v2h-5V9h7V7h-9v10h9v-6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 7c-.55 0-1 .45-1 1v4H5V8c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h3v2c0 .55.45 1 1 1s1-.45 1-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1H9V8c0-.55-.45-1-1-1m9 5c0 .55.45 1 1 1h1v2h-5V9h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1"},[])]);
return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9zm8 4v2h2v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4z"},[])]);
        }
    });
})();

export default IMaterial4gMobiledata;
</script>