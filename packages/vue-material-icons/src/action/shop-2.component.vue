<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('shop-2', {
        name: 'i-material-shop-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 16h14V7H7v9zm5-8 5.5 3.5L12 15V8z","opacity":"0.3"},[]),h('path',{d:"M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z"},[]),h('path',{d:"M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z"},[]),h('path',{d:"M12 8v7l5.5-3.5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 9H1v13h18v-2H3z"},[]),h('path',{d:"M18 5V1h-8v4H5v13h18V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3.5L12 15z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 9c-.55 0-1 .45-1 1v10c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H3V10c0-.55-.45-1-1-1z"},[]),h('path',{d:"M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 11.09V8.91c0-.39.44-.63.77-.42l4.07 2.59c.31.2.31.65 0 .84l-4.07 2.59a.503.503 0 0 1-.77-.42z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z"},[]),h('path',{d:"M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z"},[]),h('path',{d:"M12 8v7l5.5-3.5z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 9H1v11c0 1.11.89 2 2 2h16v-2H3V9z"},[]),h('path',{d:"M18 5V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3.5L12 15z"},[])]);
        }
    });
})();
</script>