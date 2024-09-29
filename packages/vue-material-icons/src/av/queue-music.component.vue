<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialQueueMusic = /* @__PURE__ */ ((_) => {
    return r('queue-music', {
        name: 'i-material-queue-music',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 6 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"16","cy":"17",r:"1","opacity":"0.3"},[]),h('path',{d:"M3 10h12v2H3zm0 4h8v2H3zm0-8h12v2H3zm14 8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 6 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 6H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1m0 4H4c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1M4 16h6c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M19 6c-1.1 0-2 .9-2 2v6.18c-.31-.11-.65-.18-1-.18-1.84 0-3.28 1.64-2.95 3.54.21 1.21 1.2 2.2 2.41 2.41 1.9.33 3.54-1.11 3.54-2.95V8h2c.55 0 1-.45 1-1s-.45-1-1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 6 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 6h-5v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3zm-7 0H3v2h12zm0 4H3v2h12zm-4 4H3v2h8z"},[])]);
return h('svg',{"viewBox":c ? '3 6 19 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 6H3v2h12zm0 4H3v2h12zM3 16h8v-2H3zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6z"},[])]);
        }
    });
})();

export default IMaterialQueueMusic;
</script>