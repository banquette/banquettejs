<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAreaChart = /* @__PURE__ */ ((_) => {
    return r('area-chart', {
        name: 'i-material-area-chart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 3 18 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m19 16.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z","opacity":"0.3"},[]),h('path',{d:"m17 7-5-4-5 7-4-3v13h18V7zm2 9.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3.44 18 16.56' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8 17 3.39-4.66c.33-.46.98-.55 1.42-.2L21 18.5v.5c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5.72c.22 0 .44.07.62.22zm-5-6c.44 0 .88.15 1.25.44l3.37 2.69 2.77-3.81c.66-.91 1.95-1.1 2.85-.4L21 15.97V8c0-.55-.45-1-1-1h-3l-4.18-3.34a1 1 0 0 0-1.44.2L7 10 3.6 7.45c-.18-.13-.39-.2-.6-.2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 3 18 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17 7-5-4-5 7-4-3v13h18V7zm2 9.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 13v7h18v-1.5l-9-7L8 17zm0-6 4 3 5-7 5 4h4v8.97l-9.4-7.31-3.98 5.48L3 10.44z"},[])]);
        }
    });
})();

export default IMaterialAreaChart;
</script>