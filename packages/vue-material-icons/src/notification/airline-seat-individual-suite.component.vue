<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('airline-seat-individual-suite', {
        name: 'i-material-airline-seat-individual-suite',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 7 22 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"7","cy":"11",r:"1","opacity":"0.3"},[]),h('path',{d:"M19 9h-6v6h8v-4c0-1.1-.9-2-2-2z","opacity":"0.3"},[]),h('path',{d:"M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 7 22 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm16-6H11v7H3V7H1v10h22V7z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 7 22 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-6c-1.1 0-2 .9-2 2v5H3V8c0-.55-.45-1-1-1s-1 .45-1 1v7c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-4c0-2.21-1.79-4-4-4z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1 7 22 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z"},[])]);
return h('svg',{"viewBox":c ? '1 7 22 10' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z"},[])]);
        }
    });
})();
</script>