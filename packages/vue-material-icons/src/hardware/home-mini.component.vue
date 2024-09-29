<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHomeMini = /* @__PURE__ */ ((_) => {
    return r('home-mini', {
        name: 'i-material-home-mini',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 7c-7.91 0-8 4.8-8 5h16c-.01-.49-.36-5-8-5M9.14 17h5.72c2.1 0 3.92-1.24 4.71-3H4.42c.8 1.76 2.62 3 4.72 3","opacity":"0.3"},[]),h('path',{d:"M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7m2.86 12H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3M4 12c0-.2.09-5 8-5 7.64 0 7.99 4.51 8 5z"},[])]);
return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7m0 2c7.64 0 7.99 4.51 8 5H4c0-.2.09-5 8-5m2.86 10H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3"},[])]);
        }
    });
})();

export default IMaterialHomeMini;
</script>