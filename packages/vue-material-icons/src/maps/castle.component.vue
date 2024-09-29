<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCastle = /* @__PURE__ */ ((_) => {
    return r('castle', {
        name: 'i-material-castle',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 7H7v6H3v6h5v-1c0-2.21 1.79-4 4-4s4 1.79 4 4v1h5v-6h-4zm-6 5H9V9h2zm4 0h-2V9h2z","opacity":"0.3"},[]),h('path',{d:"M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4z"},[]),h('path',{d:"M9 9h2v3H9zm4 0h2v3h-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-5h4v5h9V9zm-10 3H9V9h2zm4 0h-2V9h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 9c-.55 0-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v7H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v9c0 1.1.9 2 2 2h7v-3c0-1.1.9-2 2-2s2 .9 2 2v3h7c1.1 0 2-.9 2-2v-9c0-.55-.45-1-1-1m-11 3H9V9h2zm4 0h-2V9h2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm0 10h-5v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4v1H3v-6h4V7h10v6h4z"},[]),h('path',{d:"M9 9h2v3H9zm4 0h2v3h-2z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 9v2h-2V3h-2v2h-2V3h-2v2h-2V3H9v2H7V3H5v8H3V9H1v12h9v-3c0-1.1.9-2 2-2s2 .9 2 2v3h9V9zm-10 3H9V9h2zm4 0h-2V9h2z"},[])]);
        }
    });
})();

export default IMaterialCastle;
</script>