<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('3g-mobiledata', {
        name: 'i-material-3g-mobiledata',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 7v2h5v2H4v2h4v2H3v2h7V7H3zm18 4v6h-9V7h9v2h-7v6h5v-2h-2.5v-2H21z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 8c0 .55.45 1 1 1h4v2H5c-.55 0-1 .45-1 1s.45 1 1 1h3v2H4c-.55 0-1 .45-1 1s.45 1 1 1h4c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H4c-.55 0-1 .45-1 1zm18 4v3c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c.55 0 1 .45 1 1s-.45 1-1 1h-6v6h5v-2h-1.5c-.55 0-1-.45-1-1s.45-1 1-1H20c.55 0 1 .45 1 1z"},[])]);
return h('svg',{"viewBox":c ? '3 7 18 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2H3zm18 4v4c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2h-7v6h5v-2h-2.5v-2H21z"},[])]);
        }
    });
})();
</script>