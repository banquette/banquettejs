<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCameraRear = /* @__PURE__ */ ((_) => {
    return r('camera-rear', {
        name: 'i-material-camera-rear',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 0 14 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 16h10V2H7zm4.99-13c1.1 0 2 .9 2 2C14 6.1 13.1 7 12 7c-1.11 0-2-.9-2-2s.89-2 1.99-2","opacity":"0.3"},[]),h('path',{d:"M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm5-18c0-1.1-.9-2-2-2H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm-2 14H7V2h10zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '5 0 14 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zm5-20H5v18h14zm-7 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 0 14 23.29' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.85 18.85a.5.5 0 0 0-.85.36V20H6c-.55 0-1 .45-1 1s.45 1 1 1h4v.79c0 .45.54.67.85.35l1.79-1.79c.2-.2.2-.51 0-.71zM18 20h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1M17 0H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 0 14 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 20v2h5v2l3-3-3-3v2zm9 0h5v2h-5zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m0 16H7V2h10zm-5-9c1.1 0 2-.9 1.99-2 0-1.1-.9-2-2-2S10 3.9 10 5s.89 2 2 2"},[])]);
return h('svg',{"viewBox":c ? '5 0 14 24' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 20H5v2h5v2l3-3-3-3zm4 0v2h5v-2zm3-20H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2m-5 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6"},[])]);
        }
    });
})();

export default IMaterialCameraRear;
</script>