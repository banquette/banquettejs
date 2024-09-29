<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMicrosoft = /* @__PURE__ */ ((_) => {
    return r('microsoft', {
        name: 'i-remix-microsoft',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 5H5v6h6zm2 0v6h6V5zm6 8h-6v6h6zm-8 6v-6H5v6zM3 3h18v18H3z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.5 3v8.5H3V3zm0 18H3v-8.5h8.5zm1-18H21v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z"},[])]);
        }
    });
})();

export default IRemixMicrosoft;
</script>