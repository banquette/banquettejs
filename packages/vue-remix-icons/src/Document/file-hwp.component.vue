<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileHwp = /* @__PURE__ */ ((_) => {
    return r('file-hwp', {
        name: 'i-remix-file-hwp',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm0 6.667H8V7.333h3.333V6h1.334l-.001 1.333h2.333L15 4H5v16h14V8l-3-.001zm-6.667 6v1.999H16V18H8v-3.333zM12 14.333a1 1 0 1 1 0 2 1 1 0 0 1 0-2M12 9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1.333a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zM9.333 14.667H8V18h8v-1.333l-6.667-.001zM12 14.333a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 1.333a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334M12.667 6h-1.334v1.333H8v1.334h8V7.333h-3.334z"},[])]);
        }
    });
})();

export default IRemixFileHwp;
</script>