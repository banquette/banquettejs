<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('straighten', {
        name: 'i-material-straighten',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 6 22 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 12h-2V8h-2v4h-2V8h-2v4H9V8H7v4H5V8H3v8h18V8h-2z","opacity":"0.3"},[]),h('path',{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 6 22 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 6H1v12h22V6zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 6 22 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 10H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h2v3c0 .55.45 1 1 1s1-.45 1-1V8h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1z"},[])]);
return h('svg',{"viewBox":c ? '1 6 22 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"},[])]);
        }
    });
})();
</script>