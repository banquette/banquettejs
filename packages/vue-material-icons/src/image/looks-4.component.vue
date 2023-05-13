<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('looks-4', {
        name: 'i-material-looks-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0.04 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill":"none",d:"M.04 0h24v24h-24V0z"},[]),h('path',{d:"M5.04 19h14V5h-14v14zm4-12h2v4h2V7h2v10h-2v-4h-4V7z","opacity":"0.3"},[]),h('path',{d:"M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14zm-6-2h2V7h-2v4h-2V7h-2v6h4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0.04 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill":"none",d:"M.04 0h24v24h-24V0z"},[]),h('path',{d:"M21.04 3h-18v18h18V3zm-6 14h-2v-4h-4V7h2v4h2V7h2v10z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.04 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill":"none",d:"M.04 0h24v24h-24V0z"},[]),h('path',{d:"M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14c-.55 0-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3h2V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0.04 0 24 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill":"none",d:"M.04 0h24v24h-24V0z"},[]),h('path',{d:"M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14zm-6-2h2V7h-2v4h-2V7h-2v6h4z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"},[])]);
        }
    });
})();
</script>