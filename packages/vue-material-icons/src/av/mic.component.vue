<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMic = /* @__PURE__ */ ((_) => {
    return r('mic', {
        name: 'i-material-mic',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 2 14 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1","opacity":"0.3"},[]),h('path',{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"},[]),h('path',{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5.08 2 13.84 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a1 1 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08a6.99 6.99 0 0 0 5.91-5.78c.1-.6-.39-1.14-1-1.14"},[])]);
if (v === 'outlined' || v === 'sharp')
    return h('svg',{"viewBox":c ? '5 2 14 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3"},[]),h('path',{d:"M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92z"},[])]);
return h('svg',{"viewBox":c ? '5 2 14 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"},[])]);
        }
    });
})();

export default IMaterialMic;
</script>