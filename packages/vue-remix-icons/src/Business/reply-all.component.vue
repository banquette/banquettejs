<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixReplyAll = /* @__PURE__ */ ((_) => {
    return r('reply-all', {
        name: 'i-remix-reply-all',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0 4.5 24 15.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5 0 12zm4 4.616L8.924 12 12 14.883V13h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.98 7.98 0 0 0 14 11h-2z"},[])]);
return h('svg',{"viewBox":c ? '0 4.5 24 15.31' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5 0 12z"},[])]);
        }
    });
})();

export default IRemixReplyAll;
</script>