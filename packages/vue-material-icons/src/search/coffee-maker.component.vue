<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCoffeeMaker = /* @__PURE__ */ ((_) => {
    return r('coffee-maker', {
        name: 'i-material-coffee-maker',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 19c1.65 0 3-1.35 3-3v-3h-6v3c0 1.65 1.35 3 3 3","opacity":"0.3"},[]),h('path',{d:"M9 7h8c.55 0 1-.45 1-1V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1m1 9v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3"},[]),h('circle',{"cx":"13","cy":"9",r:"1"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 7V4h2V2H4v20h16v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3z"},[]),h('circle',{"cx":"13","cy":"9",r:"1"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 6V4h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1h-3.03A4.97 4.97 0 0 0 18 16v-3c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1"},[]),h('circle',{"cx":"13","cy":"9",r:"1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1m-8 10v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3"},[]),h('circle',{"cx":"13","cy":"9",r:"1"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 6V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1"},[]),h('circle',{"cx":"13","cy":"9",r:"1"},[])]);
        }
    });
})();

export default IMaterialCoffeeMaker;
</script>