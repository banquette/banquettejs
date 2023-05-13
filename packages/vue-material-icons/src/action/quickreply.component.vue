<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('quickreply', {
        name: 'i-material-quickreply',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20.5 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 4v13.17L5.17 16H15v-6h5V4z","opacity":"0.3"},[]),h('path',{d:"M5.17 16 4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17z"},[]),h('path',{d:"m19 23 3.5-7h-2.2l1.7-4h-5v6h2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20.5 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 2H2v20l4-4h9v-8h7z"},[]),h('path',{d:"M22.5 16h-2.2l1.7-4h-5v6h2v5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20.19 20.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-7c0-.55.45-1 1-1h6V4z"},[]),h('path',{d:"M21.69 16H20.3l1.4-3.3c.14-.33-.1-.7-.46-.7H17.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H19v3.94c0 .26.36.35.47.11l2.66-5.33a.494.494 0 0 0-.44-.72z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20.5 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17L4 17.17z"},[]),h('path',{d:"M22.5 16h-2.2l1.7-4h-5v6h2v5z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20.5 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-8h7V4z"},[]),h('path',{d:"M22.5 16h-2.2l1.7-4h-5v6h2v5z"},[])]);
        }
    });
})();
</script>