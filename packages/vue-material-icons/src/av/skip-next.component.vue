<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialSkipNext = /* @__PURE__ */ ((_) => {
    return r('skip-next', {
        name: 'i-material-skip-next',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 9.86v4.28L11.03 12z","opacity":"0.3"},[]),h('path',{d:"M14.5 12 6 6v12zM8 9.86 11.03 12 8 14.14zM16 6h2v12h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m7.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82M16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 18 8.5-6L6 6zm2-8.14L11.03 12 8 14.14zM16 6h2v12h-2z"},[])]);
return h('svg',{"viewBox":c ? '6 6 12 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m6 18 8.5-6L6 6zM16 6v12h2V6z"},[])]);
        }
    });
})();

export default IMaterialSkipNext;
</script>