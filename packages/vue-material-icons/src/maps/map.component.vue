<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMap = /* @__PURE__ */ ((_) => {
    return r('map', {
        name: 'i-material-map',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5 18.31 3-1.16V5.45L5 6.46zm11 .24 3-1.01V5.69l-3 1.17z","opacity":"0.3"},[]),h('path',{d:"m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M8 17.15l-3 1.16V6.46l3-1.01zm6 1.38-4-1.4V5.47l4 1.4zm5-.99-3 1.01V6.86l3-1.16z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 2.77 18 18.45' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 5.1 9 3 3 5.02v16.2l6-2.33 6 2.1 6-2.02V2.77zm0 13.79-6-2.11V5.11l6 2.11z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3.12 17.99 17.77' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.65 4.98-5-1.75c-.42-.15-.88-.15-1.3-.01L4.36 4.56C3.55 4.84 3 5.6 3 6.46v11.85c0 1.41 1.41 2.37 2.72 1.86l2.93-1.14c.22-.09.47-.09.69-.01l5 1.75c.42.15.88.15 1.3.01l3.99-1.34c.81-.27 1.36-1.04 1.36-1.9V5.69c0-1.41-1.41-2.37-2.72-1.86l-2.93 1.14c-.22.08-.46.09-.69.01M15 18.89l-6-2.11V5.11l6 2.11z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99 3-1.01v11.7l-3 1.16zm14 11.08-3 1.01V6.86l3-1.16z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.5 3-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5M15 19l-6-2.11V5l6 2.11z"},[])]);
        }
    });
})();

export default IMaterialMap;
</script>