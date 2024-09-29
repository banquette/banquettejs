<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPhoneFind = /* @__PURE__ */ ((_) => {
    return r('phone-find', {
        name: 'i-remix-phone-find',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5 2 15.66 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2a1 1 0 0 1 1 1v8h-2V4H7v16h4v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21-1.413 1.415-2.212-2.21A4 4 0 1 1 15 12m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"},[])]);
return h('svg',{"viewBox":c ? '5 2 15.66 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 2a1 1 0 0 1 1 1v8.529A6 6 0 0 0 9 16c0 3.238 2.76 6 6 6H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 10a4 4 0 0 1 3.446 6.032l2.21 2.21-1.413 1.415-2.211-2.21A4 4 0 1 1 15 12m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"},[])]);
        }
    });
})();

export default IRemixPhoneFind;
</script>