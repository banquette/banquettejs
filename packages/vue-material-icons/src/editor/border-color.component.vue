<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBorderColor = /* @__PURE__ */ ((_) => {
    return r('border-color', {
        name: 'i-material-border-color',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1.58 20 22.42' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 2.53-2.54 3.75 3.75z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 24H4c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2M13.06 5.19l3.75 3.75-8.77 8.77c-.18.19-.44.29-.7.29H5c-.55 0-1-.45-1-1v-2.34c0-.27.11-.52.29-.71zm4.82 2.68-3.75-3.75 1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"},[])]);
if (v === 'outlined' || v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.81 8.94-3.75-3.75L4 14.25V18h3.75zM6 16v-.92l7.06-7.06.92.92L6.92 16zm13.71-9.96a.996.996 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75zM2 20h20v4H2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 24H2v-4h20zM13.06 5.19l3.75 3.75L7.75 18H4v-3.75zm4.82 2.68-3.75-3.75 1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41z"},[])]);
        }
    });
})();

export default IMaterialBorderColor;
</script>