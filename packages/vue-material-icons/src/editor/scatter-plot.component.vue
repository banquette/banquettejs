<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialScatterPlot = /* @__PURE__ */ ((_) => {
    return r('scatter-plot', {
        name: 'i-material-scatter-plot',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 2 17.6 19.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"11","cy":"6",r:"2","opacity":"0.3"},[]),h('circle',{"cx":"16.6","cy":"17.6",r:"2","opacity":"0.3"},[]),h('circle',{"cx":"7","cy":"14",r:"2","opacity":"0.3"},[]),h('path',{d:"M7 10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m8-10c0-2.21-1.79-4-4-4S7 3.79 7 6s1.79 4 4 4 4-1.79 4-4m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m5.6 5.6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 2 17.6 19.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 18c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m5.6 17.6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"},[])]);
return h('svg',{"viewBox":c ? '4 3 15.6 17.6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('circle',{"cx":"7","cy":"14",r:"3"},[]),h('circle',{"cx":"11","cy":"6",r:"3"},[]),h('circle',{"cx":"16.6","cy":"17.6",r:"3"},[])]);
        }
    });
})();

export default IMaterialScatterPlot;
</script>