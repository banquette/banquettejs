<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialContentPasteOff = /* @__PURE__ */ ((_) => {
    return r('content-paste-off', {
        name: 'i-material-content-paste-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 1 19.8 21.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.83 8H17V5h2v11.17zM5 19V7.83L16.17 19z","opacity":"0.3"},[]),h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 1 19.8 21.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 1 19.19 21.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41M5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},[])]);
return h('svg',{"viewBox":c ? '1.39 1 19.8 21.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM5 19V7.83L16.17 19zM17 8V5h2v11.17l2 2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5.83l5 5zm-5-5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},[])]);
        }
    });
})();

export default IMaterialContentPasteOff;
</script>