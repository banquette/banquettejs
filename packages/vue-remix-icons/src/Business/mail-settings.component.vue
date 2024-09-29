<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMailSettings = /* @__PURE__ */ ((_) => {
    return r('mail-settings', {
        name: 'i-remix-mail-settings',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21.96 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 7.238-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9h-2zM19.501 5H4.511l7.55 6.662zM17.05 19.548a3 3 0 0 1 0-1.096l-1.014-.586 1-1.732 1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586 1 1.732-1.014.586a3 3 0 0 1 0 1.096l1.014.586-1 1.732-1.014-.586a3 3 0 0 1-.95.55V23h-2v-1.17a3 3 0 0 1-.95-.55l-1.014.586-1-1.732zM20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
return h('svg',{"viewBox":c ? '2 3 21.96 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513zm4.99 7.865a3 3 0 0 1 0-1.096l-1.014-.586 1-1.732 1.014.586c.278-.238.599-.425.95-.55V15h2v1.17c.351.125.672.312.95.55l1.014-.586 1 1.732-1.014.586a3 3 0 0 1 0 1.096l1.014.586-1 1.732-1.014-.586a3 3 0 0 1-.95.55V23h-2v-1.17a3 3 0 0 1-.95-.55l-1.014.586-1-1.732zM20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
        }
    });
})();

export default IRemixMailSettings;
</script>