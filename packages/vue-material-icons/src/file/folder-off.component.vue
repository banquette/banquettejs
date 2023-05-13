<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('folder-off', {
        name: 'i-material-folder-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0.69 2.1 21.31 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15.17 18 4 6.83V18zm-4-10L20 17.17V8z","opacity":"0.3"},[]),h('path',{d:"m.69 3.51 1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1.69 3.51zM15.17 18H4V6.83L15.17 18zM20 6h-8l-2-2H7.17l4 4H20v9.17l1.76 1.76c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0.69 2.1 21.31 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 6-2-2H6.83L22 19.17V6zM2.1 2.1.69 3.51 2 4.83V20h15.17l3.32 3.31 1.41-1.41z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.1 2.52 20.9 20.38' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l.85.85c-.14.28-.23.59-.23.93L2 18c0 1.1.9 2 2 2h13.17l2.61 2.61a.996.996 0 1 0 1.41-1.41L2.81 2.81zM20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0.69 2.1 21.31 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-8l-2-2H7.17l4 4H20v9.17l1.76 1.76c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2zM2.1 2.1.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1zM4 18V6.83L15.17 18H4z"},[])]);
return h('svg',{"viewBox":c ? '0.69 2.1 21.31 21.21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-8l-2-2H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2zM2.1 2.1.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1z"},[])]);
        }
    });
})();
</script>