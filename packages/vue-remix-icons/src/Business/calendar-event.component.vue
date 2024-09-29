<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCalendarEvent = /* @__PURE__ */ ((_) => {
    return r('calendar-event', {
        name: 'i-remix-calendar-event',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zm3 6V5h-3v2h-2V5H9v2H7V5H4v4zm0 2H4v8h16zM6 13h5v4H6z"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 4h5v4H6z"},[])]);
        }
    });
})();

export default IRemixCalendarEvent;
</script>