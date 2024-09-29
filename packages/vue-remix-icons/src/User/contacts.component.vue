<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixContacts = /* @__PURE__ */ ((_) => {
    return r('contacts', {
        name: 'i-remix-contacts',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 7h5v2h-5zm-2 5h7v2h-7zm3 5h4v2h-4zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"},[])]);
return h('svg',{"viewBox":c ? '2 1 22 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 22a8 8 0 1 1 16 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m10 4h4v2h-4zm-3-5h7v2h-7zm2-5h5v2h-5z"},[])]);
        }
    });
})();

export default IRemixContacts;
</script>