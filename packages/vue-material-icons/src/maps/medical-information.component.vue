<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMedicalInformation = /* @__PURE__ */ ((_) => {
    return r('medical-information', {
        name: 'i-material-medical-information',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 9c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2H4v11h16V9zm-4 7H9v2H7v-2H5v-2h2v-2h2v2h2zm6 1.5h-4V16h4zm2-3h-6V13h6z","opacity":"0.3"},[]),h('path',{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5zm-9-4H9v2H7v-2H5v-2h2v-2h2v2h2zm2-1.5V13h6v1.5zm0 3V16h4v1.5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 7h-7V2H9v5H2v15h20zM11 4h2v5h-2zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2zm2-1.5V13h6v1.5zm0 3V16h4v1.5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zM7 16H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1H9v1c0 .55-.45 1-1 1s-1-.45-1-1zm6.75-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0 3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zm9 16H4V9h5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h5zm-9-4H9v2H7v-2H5v-2h2v-2h2v2h2zm2-1.5V13h6v1.5zm0 3V16h4v1.5z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-9-3h2v5h-2zm0 12H9v2H7v-2H5v-2h2v-2h2v2h2zm2-1.5V13h6v1.5zm0 3V16h4v1.5z"},[])]);
        }
    });
})();

export default IMaterialMedicalInformation;
</script>