<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFoggy = /* @__PURE__ */ ((_) => {
    return r('foggy', {
        name: 'i-remix-foggy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.02 2.05 21.98 18.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908h-2.013A3.5 3.5 0 0 0 15 10.05V10a6 6 0 1 0-11.193 3.007zM4 19h17v2H4zm-2-4h21v2H2z"},[])]);
return h('svg',{"viewBox":c ? '1.02 2.05 21.98 18.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M1.584 13.007a8 8 0 0 1 14.873-5.908 5.5 5.5 0 0 1 6.52 5.908zM4 19h17v2H4zm-2-4h21v2H2z"},[])]);
        }
    });
})();

export default IRemixFoggy;
</script>