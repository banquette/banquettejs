<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCenterFocusStrong = /* @__PURE__ */ ((_) => {
    return r('center-focus-strong', {
        name: 'i-material-center-focus-strong',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"12","cy":"12",r:"3","opacity":"0.3"},[]),h('path',{d:"M7 12c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5m8 0c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3M3 19c0 1.1.9 2 2 2h4v-2H5v-4H3zM3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2m18 0c0-1.1-.9-2-2-2h-4v2h4v4h2zm-2 14h-4v2h4c1.1 0 2-.9 2-2v-4h-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-7 7H3v6h6v-2H5zM5 5h4V3H3v6h2zm16-2h-6v2h4v4h2zm-2 16h-4v2h6v-6h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-8 7c-.55 0-1 .45-1 1v3c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1m1-9c0-.55.45-1 1-1h2c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1zm14-3h-3c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1 .45 1 1v2c0 .55.45 1 1 1s1-.45 1-1V5c0-1.1-.9-2-2-2m0 15c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1s-1 .45-1 1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5m-5 3c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m-7 0H3v4c0 1.1.9 2 2 2h4v-2H5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-7 7H3v4c0 1.1.9 2 2 2h4v-2H5zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2m0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2z"},[])]);
        }
    });
})();

export default IMaterialCenterFocusStrong;
</script>