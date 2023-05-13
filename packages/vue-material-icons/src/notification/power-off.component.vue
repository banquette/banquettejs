<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('power-off', {
        name: 'i-material-power-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.71 3 18.15 18.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.12 9 16 12.88V9zm-.62 8.17V19h1v-1.83l1.07-1.06L8 10.54v3.11z","opacity":"0.3"},[]),h('path',{d:"M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.8.2-.2V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l2 2H16zM4.12 3.84 2.71 5.25 6 8.54v5.96L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41L4.12 3.84zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57-1.07 1.06z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2.71 3 18.15 18.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 14.49V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l7.69 7.69.19-.2zM10 3H8v1.88l2 2zm-5.88.84L2.71 5.25l3.34 3.34c-.03.13-.05.27-.05.4v5.51L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41L4.12 3.84z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.13 3 17.32 18.57' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 13.66V8.99c0-1-1.01-2-2-1.99V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.88l7.63 7.63c.15-.3.25-.63.25-.97zM10 4c0-.55-.45-1-1-1s-1 .45-1 1v.88l2 2V4zm10.15 15.86-7.66-7.66-5.1-5.1-2.56-2.56a.996.996 0 1 0-1.41 1.41l2.63 2.63c-.03.13-.05.27-.05.41v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l.48-.48 3.76 3.76c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2.71 3 18.15 18.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 3H8v1.88l2 2zm6 6v3.88l1.8 1.8.2-.2V9c0-1.1-.9-2-2-2V3h-2v4h-3.88l2 2H16zM4.12 3.84 2.71 5.25 6 8.54v5.96L9.5 18v3h5v-3l.48-.48 4.47 4.47 1.41-1.41L4.12 3.84zm8.38 13.33V19h-1v-1.83L8 13.65v-3.11l5.57 5.57-1.07 1.06z"},[])]);
return h('svg',{"viewBox":c ? '2.71 3 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5.49-.49zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28-4.47-4.46z"},[])]);
        }
    });
})();
</script>