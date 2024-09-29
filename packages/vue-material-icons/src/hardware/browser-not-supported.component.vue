<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBrowserNotSupported = /* @__PURE__ */ ((_) => {
    return r('browser-not-supported', {
        name: 'i-material-browser-not-supported',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.95 3.32 19.05 18.74' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32 1.95 4.59 3 5.64V20h14.36l2.06 2.06 1.27-1.27zM15 18H5V7.64L15.36 18z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.33 3.69 18.67 17.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2zM3.86 3.95a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l.41.42V18c0 1.1.9 2 2 2h12.36l1.42 1.42a.9.9 0 0 0 1.27 0 .9.9 0 0 0 0-1.27zM5 18V7.64L15.36 18z"},[])]);
return h('svg',{"viewBox":c ? '1.95 3.32 19.05 18.74' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 6v10.5l1.95 1.95c.03-.15.05-.3.05-.45V6c0-1.1-.9-2-2-2H6.5l2 2zM3.22 3.32 1.95 4.59 3 5.64V18c0 1.1.9 2 2 2h12.36l2.06 2.06 1.27-1.27zM15 18H5V7.64L15.36 18z"},[])]);
        }
    });
})();

export default IMaterialBrowserNotSupported;
</script>