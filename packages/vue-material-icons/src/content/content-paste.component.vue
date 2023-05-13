<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('content-paste', {
        name: 'i-material-content-paste',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 0 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 7H7V4H5v16h14V4h-2z","opacity":"0.3"},[]),h('path',{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 0 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2h-6.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H3v20h18V2zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 0 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 18H6c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h1v1c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4h1c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 0 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"},[])]);
return h('svg',{"viewBox":c ? '3 0 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"},[])]);
        }
    });
})();
</script>