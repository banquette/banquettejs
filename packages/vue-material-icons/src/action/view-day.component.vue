<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('view-day', {
        name: 'i-material-view-day',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 19 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 10h15v4H4z","opacity":"0.3"},[]),h('path',{d:"M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6H4v-4h15v4zM2 4h19v2H2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 21h17c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 4v1c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 19 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"},[])]);
return h('svg',{"viewBox":c ? '2 3 19 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"},[])]);
        }
    });
})();
</script>