<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAccountPinBox = /* @__PURE__ */ ((_) => {
    return r('account-pin-box', {
        name: 'i-remix-account-pin-box',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 21-2 2-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21zm5-2V5H5v14h5.828L12 20.172 13.172 19zm-11.028-.82a10 10 0 0 1-1.751-.978A7 7 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a10 10 0 0 1-1.724 1.025A5 5 0 0 0 12.102 16c-1.715 0-3.23.864-4.13 2.18M12 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14 21-2 2-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21zm-7.643-3h11.49a6.99 6.99 0 0 0-5.745-3 6.99 6.99 0 0 0-5.745 3M12 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"},[])]);
        }
    });
})();

export default IRemixAccountPinBox;
</script>