<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('fast-forward', {
        name: 'i-material-fast-forward',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 6 17.5 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z","opacity":"0.3"},[]),h('path',{d:"m4 18 8.5-6L4 6v12zm2-8.14L9.03 12 6 14.14V9.86zM21.5 12 13 6v12l8.5-6zM15 9.86 18.03 12 15 14.14V9.86z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 6.93 16.77 10.14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 6 17.5 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 9.86 18.03 12 15 14.14V9.86m-9 0L9.03 12 6 14.14V9.86M13 6v12l8.5-6L13 6zM4 6v12l8.5-6L4 6z"},[])]);
return h('svg',{"viewBox":c ? '4 6 17.5 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"},[])]);
        }
    });
})();
</script>