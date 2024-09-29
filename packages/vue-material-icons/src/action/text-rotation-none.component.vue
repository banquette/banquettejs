<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTextRotationNone = /* @__PURE__ */ ((_) => {
    return r('text-rotation-none', {
        name: 'i-material-text-rotation-none',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5 3 15.79 17.29' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20.65 17.65-1.79-1.79a.501.501 0 0 0-.86.35V17H6c-.55 0-1 .45-1 1s.45 1 1 1h12v.79c0 .45.54.67.85.35l1.79-1.79c.2-.19.2-.51.01-.7M9.5 11.8h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C12.87 3.27 12.46 3 12 3s-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34.39 0 .74-.24.89-.6zM12 4.98 13.87 10h-3.74z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '5 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21 18-3-3v2H5v2h13v2zM9.5 11.8h5l.9 2.2h2.1L12.75 3h-1.5L6.5 14h2.1zM12 4.98 13.87 10h-3.74z"},[])]);
return h('svg',{"viewBox":c ? '5 3 15.5 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.75 3h-1.5L6.5 14h2.1l.9-2.2h5l.9 2.2h2.1zm-2.62 7L12 4.98 13.87 10zm10.37 8-3-3v2H5v2h12.5v2z"},[])]);
        }
    });
})();

export default IMaterialTextRotationNone;
</script>