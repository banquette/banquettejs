<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('format-paint', {
        name: 'i-material-format-paint',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 4h10v2H6z","opacity":"0.3"},[]),h('path',{d:"M17 2H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3V3c0-.55-.45-1-1-1zm-1 4H6V4h10v2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4h-9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h7c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"},[])]);
return h('svg',{"viewBox":c ? '4 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"},[])]);
        }
    });
})();
</script>