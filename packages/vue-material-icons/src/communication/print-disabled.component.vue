<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPrintDisabled = /* @__PURE__ */ ((_) => {
    return r('print-disabled', {
        name: 'i-material-print-disabled',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '0 1.6 22.36 22.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 10H5c-.55 0-1 .45-1 1v4h2v-2h4z","opacity":"0.3"},[]),h('path',{d:"M1.41 1.6 0 3.01 5 8c-1.66 0-3 1.34-3 3v6h4v4h12l2.95 2.96 1.41-1.41zM6 15H4v-4c0-.55.45-1 1-1h2l3 3H6zm2 4v-4h4l4 4z"},[]),h('path',{d:"m18 15.01 2-.01v-4c0-.55-.45-1-1-1h-6.34l3 3H18zm-1-3.5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1","opacity":"0.3"},[]),h('circle',{"cx":"18","cy":"11.51",r:"1"},[]),h('path',{d:"M16 5H8v.35L10.66 8H16z","opacity":"0.3"},[]),h('path',{d:"M19 8h-1V3H6v.36l2 2V5h8v3h-5.34l2 2H19c.55 0 1 .45 1 1v4l-2 .01V13h-2.34l4 4H22v-6c0-1.66-1.34-3-3-3"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '0 1.6 22.36 22.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.65 7H18V3.01H6v.35zm1.01 1.01 9 8.99H22v-5.99c0-1.66-1.34-3-3-3zM19 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M1.41 1.6 0 3.01l5 5c-1.66 0-3 1.33-3 2.99v6h4v4h12l2.95 2.96 1.41-1.41zM8 19.01V15h4l4 4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '0.42 2.03 21.58 21.52' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.12 2.32A.996.996 0 1 0 .71 3.73L4.98 8A3 3 0 0 0 2 11v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c.55 0 1.04-.22 1.4-.58l2.83 2.83a.996.996 0 1 0 1.41-1.41zM15 19H9c-.55 0-1-.45-1-1v-4h2.98l4.72 4.72c-.19.17-.43.28-.7.28m4-11h-8.37l9 9H20c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-2-5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H7c-.37 0-.68.21-.85.51L9.63 7z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '0 1.6 22.36 22.36' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.41 1.6 0 3.01 5 8c-1.66 0-3 1.34-3 3v6h4v4h12l2.95 2.96 1.41-1.41zM6 15H4v-4c0-.55.45-1 1-1h2l3 3H6zm2 4v-4h4l4 4zM8 5h8v3h-5.34l2 2H19c.55 0 1 .45 1 1v4l-2 .01V13h-2.34l4 4H22v-6c0-1.66-1.34-3-3-3h-1V3H6v.36l2 2z"},[]),h('circle',{"cx":"18","cy":"11.51",r:"1"},[])]);
return h('svg',{"viewBox":c ? '0 1.8 22.2 22.2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.1 17H22v-6c0-1.7-1.3-3-3-3h-9zm-.1-7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-1-3V3H6v1.1L9 7zM1.2 1.8 0 3l4.9 5C3.3 8.1 2 9.4 2 11v6h4v4h11.9l3 3 1.3-1.3zM8 19v-5h2.9l5 5z"},[])]);
        }
    });
})();

export default IMaterialPrintDisabled;
</script>