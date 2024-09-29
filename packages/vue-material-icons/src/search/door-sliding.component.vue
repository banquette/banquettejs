<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDoorSliding = /* @__PURE__ */ ((_) => {
    return r('door-sliding', {
        name: 'i-material-door-sliding',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 19h5V5h-5zm1-8h2v2h-2zm-8 8h5V5H6zm2-8h2v2H8z","opacity":"0.3"},[]),h('path',{d:"M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-9 0H6V5h5zm7 0h-5V5h5z"},[]),h('path',{d:"M8 11h2v2H8zm6 0h2v2h-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2zm-10-6H8v-2h2zm6 0h-2v-2h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V5c0-1.1-.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 .9-2 2v14c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1M9 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 13H8v-2h2zm6-2h-2v2h2zm5 8v2H3v-2h1V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14zM11 5H6v14h5zm7 0h-5v14h5z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 19V5c0-1.1-.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-10-6H8v-2h2zm6 0h-2v-2h2z"},[])]);
        }
    });
})();

export default IMaterialDoorSliding;
</script>