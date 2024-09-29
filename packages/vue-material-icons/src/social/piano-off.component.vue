<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPianoOff = /* @__PURE__ */ ((_) => {
    return r('piano-off', {
        name: 'i-material-piano-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM13 10.17V5h-2v3.17zm6 6V5h-2v8.5c0 .19-.07.36-.16.51z","opacity":"0.3"},[]),h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V21h15.17l1.61 1.61zM8.25 19H5V7.83l2 2v4.67h1.25zm1.5 0v-4.5H11v-.67l3.25 3.25V19zM5.83 3H21v15.17l-2-2V5h-2v9.17l-4-4V5h-2v3.17z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 3 19.19 19.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20.49 21.9a.996.996 0 0 0 0-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l.9.91V19c0 1.1.9 2 2 2h13.17l.9.9c.39.39 1.02.39 1.42 0M8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2.81 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61zM8.25 19H5V7.83l2 2v3.67c0 .55.45 1 1 1h.25zm1.5 0v-4.5H10c.46 0 .82-.31.94-.73l3.31 3.31V19zM11 8.17 5.83 3H19c1.1 0 2 .9 2 2v13.17l-2-2V5h-2v8.5c0 .19-.07.36-.16.51L13 10.17V5h-2z"},[])]);
        }
    });
})();

export default IMaterialPianoOff;
</script>