<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialOpenInNewOff = /* @__PURE__ */ ((_) => {
    return r('open-in-new-off', {
        name: 'i-material-open-in-new-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.79 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.79 5.8 14 3h7v7l-2.79-2.8-4.09 4.09-1.41-1.41zM19 12v4.17l2 2V12zm.78 10.61L18.17 21H3V5.83L1.39 4.22 2.8 2.81l18.38 18.38zM16.17 19l-4.88-4.88-1.59 1.59-1.41-1.41 1.59-1.59L5 7.83V19zM7.83 5H12V3H5.83z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 3 19.19 19.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.79 5.8-1.94-1.94a.506.506 0 0 1 .36-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 7.2l-4.09 4.09-1.41-1.41zM19 13v3.17l2 2V13c0-.55-.45-1-1-1s-1 .45-1 1m.07 8.9-.9-.9H5a2 2 0 0 1-2-2V5.83l-.9-.9a.996.996 0 1 1 1.41-1.41l16.97 16.97a.996.996 0 1 1-1.41 1.41m-2.9-2.9-4.88-4.88-.88.88A.996.996 0 1 1 9 13.59l.88-.88L5 7.83V19zM7.83 5H11c.55 0 1-.45 1-1s-.45-1-1-1H5.83z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2.81 19.79 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.79 5.8 14 3h7v7l-2.79-2.8-4.09 4.09-1.41-1.41zM19 12v4.17l2 2V12zm.78 10.61L18.17 21H5a2 2 0 0 1-2-2V5.83L1.39 4.22 2.8 2.81l18.38 18.38zM16.17 19l-4.88-4.88-1.59 1.59-1.41-1.41 1.59-1.59L5 7.83V19zM7.83 5H12V3H5.83z"},[])]);
        }
    });
})();

export default IMaterialOpenInNewOff;
</script>