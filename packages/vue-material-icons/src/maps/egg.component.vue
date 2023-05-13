<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('egg', {
        name: 'i-material-egg',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5c-1.93 0-5 4.91-5 9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-4.09-3.07-9-5-9zm1 13c-3.01 0-5-2-5-5 0-.55.45-1 1-1s1 .45 1 1c0 2.92 2.42 3 3 3 .55 0 1 .45 1 1s-.45 1-1 1z","opacity":"0.3"},[]),h('path',{d:"M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm0 16c-2.76 0-5-2.24-5-5 0-4.09 3.07-9 5-9s5 4.91 5 9c0 2.76-2.24 5-5 5z"},[]),h('path',{d:"M13 16c-.58 0-3-.08-3-3 0-.55-.45-1-1-1s-1 .45-1 1c0 3 1.99 5 5 5 .55 0 1-.45 1-1s-.45-1-1-1z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm1 15c-3 0-5-1.99-5-5v-1h2v1c0 2.92 2.42 3 3 3h1v2h-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm0 16c-2.76 0-5-2.24-5-5 0-4.09 3.07-9 5-9s5 4.91 5 9c0 2.76-2.24 5-5 5z"},[]),h('path',{d:"M13 16c-.58 0-3-.08-3-3 0-.55-.45-1-1-1s-1 .45-1 1c0 3 1.99 5 5 5 .55 0 1-.45 1-1s-.45-1-1-1z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm1 15c-3 0-5-1.99-5-5 0-.55.45-1 1-1s1 .45 1 1c0 2.92 2.42 3 3 3 .55 0 1 .45 1 1s-.45 1-1 1z"},[])]);
        }
    });
})();
</script>