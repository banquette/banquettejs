<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('amp-stories', {
        name: 'i-material-amp-stories',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 4 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 6h6v11H9z","opacity":"0.3"},[]),h('path',{d:"M7 19h10V4H7v15zM9 6h6v11H9V6zM3 6h2v11H3zm16 0h2v11h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 4 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 4H8c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM4 6c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm16 0c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 4 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 19h10V4H7v15zM9 6h6v11H9V6zM3 6h2v11H3zm16 0h2v11h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 4 18 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 4h10v15H7zM3 6h2v11H3zm16 0h2v11h-2z"},[])]);
        }
    });
})();
</script>