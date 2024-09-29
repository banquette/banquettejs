<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCalendar2 = /* @__PURE__ */ ((_) => {
    return r('calendar-2', {
        name: 'i-remix-calendar-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zm3 8H4v8h16zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2zm-9 8h2v2H6zm5 0h2v2h-2zm5 0h2v2h-2z"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm5 0h2v2h-2zm5 0h2v2h-2z"},[])]);
        }
    });
})();

export default IRemixCalendar2;
</script>