<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialContentCopy = /* @__PURE__ */ ((_) => {
    return r('content-copy', {
        name: 'i-material-content-copy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 7h11v14H8z","opacity":"0.3"},[]),h('path',{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 1H2v16h2V3h12zm5 4H6v18h15zm-2 16H8V7h11z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 2 17 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"},[])]);
return h('svg',{"viewBox":c ? '2 1 19 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"},[])]);
        }
    });
})();

export default IMaterialContentCopy;
</script>