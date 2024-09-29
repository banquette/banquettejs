<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPermScanWifi = /* @__PURE__ */ ((_) => {
    return r('perm-scan-wifi', {
        name: 'i-material-perm-scan-wifi',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 3 24 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5c-3.26 0-6.2.85-9.08 2.65L12 18.83l9.08-11.16C18.18 5.85 15.25 5 12 5m1 11h-2v-6h2zm-2-8V6h2v2z","opacity":"0.3"},[]),h('path',{d:"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3M2.92 7.65C5.8 5.85 8.74 5 12 5c3.25 0 6.18.85 9.08 2.67L12 18.83zM11 10h2v6h-2zm0-4h2v2h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.45 3 23.11 17.83' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3C7.41 3 3.86 4.53.89 6.59c-.49.33-.59 1-.22 1.46l9.78 12.04c.8.98 2.3.99 3.1 0l9.78-12.02a1 1 0 0 0-.22-1.46C20.14 4.54 16.59 3 12 3m0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m-1-8V6h2v2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 3 24 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3M2.92 7.65C5.8 5.85 8.74 5 12 5c3.25 0 6.18.85 9.08 2.67L12 18.83zM11 10h2v6h-2zm0-4h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '0 3 24 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3m1 13h-2v-6h2zm-2-8V6h2v2z"},[])]);
        }
    });
})();

export default IMaterialPermScanWifi;
</script>