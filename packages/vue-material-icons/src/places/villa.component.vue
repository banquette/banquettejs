<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialVilla = /* @__PURE__ */ ((_) => {
    return r('villa', {
        name: 'i-material-villa',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5 9.37 9-3.46V12H9v7H5zM19 19h-3v-3h-2v3h-3v-5h8z","opacity":"0.3"},[]),h('path',{d:"M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2M5 9.37l9-3.46V12H9v7H5zM19 19h-3v-3h-2v3h-3v-5h8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3.45 18 17.55' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 21H4c-.55 0-1-.45-1-1V8.69c0-.42.25-.79.64-.94l11-4.23a1 1 0 0 1 1.36.94V10H8c-.55 0-1 .45-1 1zm10-9h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h4v-4c0-.55.45-1 1-1s1 .45 1 1v4h4c.55 0 1-.45 1-1v-8c0-1.1-.9-2-2-2s-2 .9-2 2"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 10c-1.1 0-2 .9-2 2h-1V3L3 8v13h18v-9c0-1.1-.9-2-2-2M5 9.37l9-3.46V12H9v7H5zM19 19h-3v-3h-2v3h-3v-5h8z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 21H3V8l13-5v7H7zm12-11c-1.1 0-2 .9-2 2H9v9h5v-5h2v5h5v-9c0-1.1-.9-2-2-2"},[])]);
        }
    });
})();

export default IMaterialVilla;
</script>