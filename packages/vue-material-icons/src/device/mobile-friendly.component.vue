<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMobileFriendly = /* @__PURE__ */ ((_) => {
    return r('mobile-friendly', {
        name: 'i-material-mobile-friendly',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3.19 1 17.81 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 1H7v5h2V4h10v16H9v-2H7v5h14zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.56 1 17.44 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7.01 13.47l-1.92-1.92c-.35-.35-.92-.35-1.27 0s-.35.92 0 1.27l2.47 2.47c.39.39 1.02.39 1.41 0l5.85-5.85c.35-.35.35-.92 0-1.27s-.92-.35-1.27 0z"},[])]);
return h('svg',{"viewBox":c ? '3.19 1 17.81 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2M7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z"},[])]);
        }
    });
})();

export default IMaterialMobileFriendly;
</script>