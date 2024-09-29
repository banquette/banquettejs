<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCompare = /* @__PURE__ */ ((_) => {
    return r('compare', {
        name: 'i-material-compare',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 5h-5v7l5 6zm-9 13v-6l-5 6z","opacity":"0.3"},[]),h('path',{d:"M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2zm-2 17H5l5-6z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 3H3v18h7v2h2V1h-2zm0 15H5l5-6zM21 3h-7v2h5v13l-5-6v9h7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 15H5l5-6zm9-15h-5v2h4c.55 0 1 .45 1 1v12l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2zm0 15H5l5-6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"},[])]);
        }
    });
})();

export default IMaterialCompare;
</script>