<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCalendarViewDay = /* @__PURE__ */ ((_) => {
    return r('calendar-view-day', {
        name: 'i-material-calendar-view-day',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 6 18 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z"},[]),h('path',{d:"M5 12h14v1H5z","opacity":"0.3"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 7h14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2M4 3h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1m0 16h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 6 18 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z"},[])]);
return h('svg',{"viewBox":c ? '3 6 18 13' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"},[])]);
        }
    });
})();

export default IMaterialCalendarViewDay;
</script>