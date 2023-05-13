<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('notification-4', {
        name: 'i-remix-notification-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.5 2 17 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"},[])]);
return h('svg',{"viewBox":c ? '3.5 2 17 21.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 18.667.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"},[])]);
        }
    });
})();
</script>