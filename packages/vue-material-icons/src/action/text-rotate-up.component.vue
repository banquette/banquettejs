<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTextRotateUp = /* @__PURE__ */ ((_) => {
    return r('text-rotate-up', {
        name: 'i-material-text-rotate-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3 4.2 17.29 15.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.35 4.35c-.2-.2-.51-.2-.71 0l-1.79 1.79c-.31.32-.09.86.36.86H17v12c0 .55.45 1 1 1s1-.45 1-1V7h.79c.45 0 .67-.54.35-.85zM11.8 15.5v-5l1.6-.66c.36-.14.6-.49.6-.88 0-.69-.71-1.15-1.34-.88l-8.97 3.88c-.42.17-.69.58-.69 1.04s.27.87.69 1.05l8.97 3.88c.63.27 1.34-.2 1.34-.89 0-.39-.24-.74-.6-.89zM4.98 13 10 11.13v3.74z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 4-3 3h2v13h2V7h2zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1zM4.98 13 10 11.13v3.74z"},[])]);
return h('svg',{"viewBox":c ? '3 4.25 18 15.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 12v1.5l11 4.75v-2.1l-2.2-.9v-5l2.2-.9v-2.1zm7 2.62-5.02-1.87L10 10.88zm8-10.37-3 3h2v12.5h2V7.25h2z"},[])]);
        }
    });
})();

export default IMaterialTextRotateUp;
</script>