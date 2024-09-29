<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCandlestickChart = /* @__PURE__ */ ((_) => {
    return r('candlestick-chart', {
        name: 'i-material-candlestick-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2z"},[]),h('path',{d:"M7 8h2v8H7zm8 2h2v3h-2z","opacity":"0.3"},[]),h('path',{d:"M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 4c-.55 0-1 .45-1 1v1H6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H9V5c0-.55-.45-1-1-1m10 4h-1V5c0-.55-.45-1-1-1s-1 .45-1 1v3h-1c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h1v4c0 .55.45 1 1 1s1-.45 1-1v-4h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2zm10-8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z"},[])]);
return h('svg',{"viewBox":c ? '5 4 14 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 4H7v2H5v12h2v2h2v-2h2V6H9zm10 4h-2V4h-2v4h-2v7h2v5h2v-5h2z"},[])]);
        }
    });
})();

export default IMaterialCandlestickChart;
</script>