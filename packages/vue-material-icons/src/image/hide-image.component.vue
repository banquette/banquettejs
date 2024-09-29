<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHideImage = /* @__PURE__ */ ((_) => {
    return r('hide-image', {
        name: 'i-material-hide-image',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.17 19-2-2H6l3-4 2.25 3 .82-1.1L5 7.83V19zM7.83 5 19 16.17V5z","opacity":"0.3"},[]),h('path',{d:"M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3H5.83L21 18.17zM2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61 1.41-1.41zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 3 19.19 19.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 3H5.83L21 18.17V5c0-1.1-.9-2-2-2m-15.49.51A.996.996 0 1 0 2.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9a.996.996 0 1 0 1.41-1.41zM7 17a.5.5 0 0 1-.4-.8l2-2.67c.2-.27.6-.27.8 0L11.25 16l.82-1.1 2.1 2.1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 5c0-1.1-.9-2-2-2H5.83L21 18.17zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1z"},[])]);
        }
    });
})();

export default IMaterialHideImage;
</script>