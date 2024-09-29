<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLockOutline = /* @__PURE__ */ ((_) => {
    return r('lock-outline', {
        name: 'i-material-lock-outline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 8V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H4v14h16V8zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm8 14H7c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1m-5-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"},[])]);
return h('svg',{"viewBox":c ? '4 1 16 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9zM18 20H6V10h12z"},[])]);
        }
    });
})();

export default IMaterialLockOutline;
</script>