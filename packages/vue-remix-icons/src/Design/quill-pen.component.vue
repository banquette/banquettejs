<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixQuillPen = /* @__PURE__ */ ((_) => {
    return r('quill-pen', {
        name: 'i-remix-quill-pen',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001 18 10c-1 3-4 6-8 6.5Q5.997 17 4.998 22H3C4 16 6 2 21 2q-1.5 4.496-2.997 5.997z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2C6 2 4 16 3 22h1.998q.999-5 5.002-5.5c4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5"},[])]);
        }
    });
})();

export default IRemixQuillPen;
</script>