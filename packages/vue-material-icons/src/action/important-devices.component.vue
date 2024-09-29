<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialImportantDevices = /* @__PURE__ */ ((_) => {
    return r('important-devices', {
        name: 'i-material-important-devices',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 13h5v7h-5z","opacity":"0.3"},[]),h('path',{d:"M23 11.01 18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99M23 20h-5v-7h5zM2 4h18v5h2V4a2 2 0 0 0-2-2H2C.89 2 0 2.89 0 4v12a2 2 0 0 0 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2zm9 2-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M24 11.01 17 11v11h7zM23 20h-5v-7h5zM22 2H0v16h9v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2zM11.97 9 11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 11.01 18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99M23 20h-5v-7h5zM20 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h7v2H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V4c0-1.1-.9-2-2-2m-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9z"},[])]);
return h('svg',{"viewBox":c ? '0 2 24 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 11.01 18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99M23 20h-5v-7h5zM20 2H2C.89 2 0 2.89 0 4v12a2 2 0 0 0 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4a2 2 0 0 0-2-2m-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9z"},[])]);
        }
    });
})();

export default IMaterialImportantDevices;
</script>