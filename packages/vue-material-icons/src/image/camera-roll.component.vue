<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCameraRoll = /* @__PURE__ */ ((_) => {
    return r('camera-roll', {
        name: 'i-material-camera-roll',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5H9V3H7v2H4v15h8v-2h8V7h-8zm-1 12H9v-2h2zm0-7H9V8h2zm6-2h2v2h-2zm0 7h2v2h-2zm-4-7h2v2h-2zm0 7h2v2h-2z","opacity":"0.3"},[]),h('path',{d:"M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5zm6 13h-8v2H4V5h3V3h2v2h3v2h8zM9 15h2v2H9zm0-7h2v2H9zm4 7h2v2h-2zm0-7h2v2h-2zm4 7h2v2h-2zm0-7h2v2h-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 5V3h-3V1H5v2H2v19h12v-2h8V5zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5zm6 13h-8v2H4V5h3V3h2v2h3v2h8zM9 15h2v2H9zm0-7h2v2H9zm4 7h2v2h-2zm0-7h2v2h-2zm4 7h2v2h-2zm0-7h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5zm-2 13h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2zm4 9h-2v-2h2zm0-9h-2V7h2z"},[])]);
        }
    });
})();

export default IMaterialCameraRoll;
</script>