<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileCode = /* @__PURE__ */ ((_) => {
    return r('file-code', {
        name: 'i-remix-file-code',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415zM6.343 12 9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm1.657 10L14.12 8.464 12.707 9.88 14.828 12l-2.12 2.121 1.413 1.415zM6.343 12l3.536 3.536 1.414-1.415L9.172 12l2.12-2.121L9.88 8.464z"},[])]);
        }
    });
})();

export default IRemixFileCode;
</script>