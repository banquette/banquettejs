<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAddAlert = /* @__PURE__ */ ((_) => {
    return r('add-alert', {
        name: 'i-material-add-alert',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 1.5 18 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5m4 7h-3v3h-2v-3H8v-2h3V8h2v3h3z","opacity":"0.3"},[]),h('path',{d:"M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99m7-6v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1zm-2 1H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5zm-4-7V8h-2v3H8v2h3v3h2v-3h3v-2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 1.5 18 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99m7-6v-6c0-3.35-2.36-6.15-5.5-6.83V1.5h-3v2.67C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1zm-3-3.99h-3v3h-2v-3H8V11h3V8h2v3h3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m7-5h-1v-7c0-2.79-1.91-5.14-4.5-5.8v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1m-5-4h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 1.5 18 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99zM12 6c2.76 0 5 2.24 5 5v7H7v-7c0-2.76 2.24-5 5-5m0-4.5c-.83 0-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1l-2-2v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72A6.87 6.87 0 0 0 5.12 11v5.82L3 18.94V20h18v-1.06zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3z"},[])]);
        }
    });
})();

export default IMaterialAddAlert;
</script>