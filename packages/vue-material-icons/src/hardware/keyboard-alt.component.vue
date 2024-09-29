<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialKeyboardAlt = /* @__PURE__ */ ((_) => {
    return r('keyboard-alt', {
        name: 'i-material-keyboard-alt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h18V6H3zM17 8h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zM9 8h2v2H9zm0 4h2v2H9zm-1 4h8v1H8zM5 8h2v2H5zm0 4h2v2H5z","opacity":"0.3"},[]),h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15H3V6h18z"},[]),h('path',{d:"M9 8h2v2H9zM5 8h2v2H5zm3 8h8v1H8zm5-8h2v2h-2zm-4 4h2v2H9zm-4 0h2v2H5zm8 0h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 4H1v17h22zM7 12v2H5v-2zm-2-2V8h2v2zm6 2v2H9v-2zm-2-2V8h2v2zm7 6v1H8v-1zm-1-4v2h-2v-2zm-2-2V8h2v2zm4 4v-2h2v2zm2-4h-2V8h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 12v2H5v-2zm-2-2V8h2v2zm6 2v2H9v-2zm-2-2V8h2v2zm7 6.5c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5M15 12v2h-2v-2zm-2-2V8h2v2zm4 4v-2h2v2zm2-4h-2V8h2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15H3V6h18zM9 8h2v2H9zM5 8h2v2H5zm3 8h8v1H8zm5-8h2v2h-2zm-4 4h2v2H9zm-4 0h2v2H5zm8 0h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M7 12v2H5v-2zm-2-2V8h2v2zm6 2v2H9v-2zm-2-2V8h2v2zm7 6v1H8v-1zm-1-4v2h-2v-2zm-2-2V8h2v2zm4 4v-2h2v2zm2-4h-2V8h2z"},[])]);
        }
    });
})();

export default IMaterialKeyboardAlt;
</script>