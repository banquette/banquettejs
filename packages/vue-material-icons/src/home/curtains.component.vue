<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCurtains = /* @__PURE__ */ ((_) => {
    return r('curtains', {
        name: 'i-material-curtains',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 13.14V19h3.94c-.3-2.93-1.89-5.27-3.94-5.86M9.94 5H6v5.86C8.05 10.27 9.64 7.93 9.94 5m4.12 14H18v-5.86c-2.05.59-3.64 2.93-3.94 5.86M18 10.86V5h-3.94c.3 2.93 1.89 5.27 3.94 5.86","opacity":"0.3"},[]),h('path',{d:"M20 19V3H4v16H2v2h20v-2zM6 5h3.94c-.3 2.93-1.89 5.27-3.94 5.86zm0 14v-5.86c2.05.58 3.64 2.93 3.94 5.86zm5.95 0c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7zM18 19h-3.94c.3-2.93 1.89-5.27 3.94-5.86zm0-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V3H4v16H2v2h20v-2zm-2-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18zM15.81 12c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7M9.94 5c-.3 2.93-1.89 5.27-3.94 5.86V5zM6 13.14c2.05.58 3.64 2.93 3.94 5.86H6zM14.06 19c.3-2.93 1.89-5.27 3.94-5.86V19z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V3H4v16H2v2h20v-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7"},[])]);
        }
    });
})();

export default IMaterialCurtains;
</script>