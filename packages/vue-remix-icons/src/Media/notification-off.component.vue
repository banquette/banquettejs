<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNotificationOff = /* @__PURE__ */ ((_) => {
    return r('notification-off', {
        name: 'i-remix-notification-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.39 1.39 21.21 22.11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.324-2.584.899-3.687L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414zM6.408 7.822A6 6 0 0 0 6 10v8h10.586zM20 15.786l-2-2V10a6 6 0 0 0-8.99-5.203L7.56 3.345A8 8 0 0 1 20 10zM9.5 21h5a2.5 2.5 0 1 1-5 0"},[])]);
return h('svg',{"viewBox":c ? '1.39 1.39 21.21 22.11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.324-2.584.899-3.687L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414zM20 15.786 7.559 3.345A8 8 0 0 1 20 10zM9.5 21h5a2.5 2.5 0 1 1-5 0"},[])]);
        }
    });
})();

export default IRemixNotificationOff;
</script>