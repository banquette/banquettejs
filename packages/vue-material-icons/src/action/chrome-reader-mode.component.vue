<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialChromeReaderMode = /* @__PURE__ */ ((_) => {
    return r('chrome-reader-mode', {
        name: 'i-material-chrome-reader-mode',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 6h8v13H3z","opacity":"0.3"},[]),h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M11 19H3V6h8zm10 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM23 4H1v17h22zm-2 15h-9V6h9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14c0 .55-.45 1-1 1h-8V6h8c.55 0 1 .45 1 1zm-1.75-8.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 2.5h-5.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 4 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M3 19V6h8v13zm18 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"},[])]);
return h('svg',{"viewBox":c ? '-74 0 98 77' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill":"none",d:"M-74 29h48v48h-48zM0 0h24v24H0zm0 0h24v24H0z"},[]),h('path',{d:"M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 15h-9V6h9z"},[])]);
        }
    });
})();

export default IMaterialChromeReaderMode;
</script>