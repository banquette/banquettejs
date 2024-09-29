<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNoCell = /* @__PURE__ */ ((_) => {
    return r('no-cell', {
        name: 'i-material-no-cell',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 1 19.8 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 21h10v-1H7zM7 3v1h10V3z","opacity":"0.3"},[]),h('path',{d:"M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6zM7 3h10v1H7zm14.19 18.19L2.81 2.81 1.39 4.22 5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91zM17 21H7v-1h10zM7 18V9.83L15.17 18z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 1 19.8 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78zM7 18V9.83L15.17 18zM8.83 6 5 2.17V1h14v15.17l-2-2V6z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 1 18.97 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.83 6-3.7-3.7C5.42 1.55 6.15 1 7 1l10 .01c1.1 0 2 .89 2 1.99v13.17l-2-2V6zm11.66 15.9a.996.996 0 0 1-1.41 0l-.2-.2c-.3.75-1.03 1.3-1.88 1.3H7c-1.1 0-2-.9-2-2V7.83l-2.9-2.9a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41M15.17 18 7 9.83V18z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1.39 1 19.8 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6zM7 3h10v1H7zm14.19 18.19L19 19l-2-2L7 7 5 5 2.81 2.81 1.39 4.22 5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91zM17 21H7v-1h10zM7 18V9.83L15.17 18z"},[])]);
return h('svg',{"viewBox":c ? '1.39 1 19.79 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.83 6-3.7-3.7C5.42 1.55 6.15 1 7 1l10 .01c1.1 0 2 .89 2 1.99v13.17l-2-2V6zm10.95 16.61-.91-.91c-.29.75-1.02 1.3-1.87 1.3H7c-1.1 0-2-.9-2-2V7.83L1.39 4.22 2.8 2.81l18.38 18.38zM15.17 18 7 9.83V18z"},[])]);
        }
    });
})();

export default IMaterialNoCell;
</script>