<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialArchitecture = /* @__PURE__ */ ((_) => {
    return r('architecture', {
        name: 'i-material-architecture',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6.36 3 11.29 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.36 18.78 6.61 21l1.62-1.54 2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zm.17-2.28c.3-1.56-.6-2.94-1.94-3.42V4c0-.55-.45-1-1-1s-1 .45-1 1v1.18C9.84 5.6 9 6.7 9 8c0 1.84 1.66 3.3 3.56 2.95 1.18-.22 2.15-1.17 2.38-2.35M12 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
return h('svg',{"viewBox":c ? '6.36 3 11.29 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.36 18.78 6.61 21l1.62-1.54 2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[])]);
        }
    });
})();

export default IMaterialArchitecture;
</script>