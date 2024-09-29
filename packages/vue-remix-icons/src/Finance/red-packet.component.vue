<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRedPacket = /* @__PURE__ */ ((_) => {
    return r('red-packet', {
        name: 'i-remix-red-packet',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.173 9.763A10 10 0 0 0 19 7.141V4H5v3.141a10 10 0 0 0 4.827 2.622 2.5 2.5 0 0 1 4.346 0m.208 2a2.501 2.501 0 0 1-4.762 0A11.9 11.9 0 0 1 5 9.749V20h14V9.748a11.9 11.9 0 0 1-4.619 2.016zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 5.937A12 12 0 0 1 14.194 9.8a2.5 2.5 0 0 0-4.388 0A12 12 0 0 1 3 5.937V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm0 2.787V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.724A13.94 13.94 0 0 0 9.63 11.8a2.501 2.501 0 0 0 4.74 0A13.94 13.94 0 0 0 21 8.724"},[])]);
        }
    });
})();

export default IRemixRedPacket;
</script>