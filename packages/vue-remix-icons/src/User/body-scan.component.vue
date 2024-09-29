<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBodyScan = /* @__PURE__ */ ((_) => {
    return r('body-scan', {
        name: 'i-remix-body-scan',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 16v4h4v2H2v-6zm18 0v6h-6v-2h4v-4zM7.5 7a4.5 4.5 0 0 0 3.5 4.389V17h2l.001-5.612A4.5 4.5 0 0 0 16.5 7h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7zM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M8 2v2l-4-.001V8H2V2zm14 0v6h-2V4h-4V2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 16v4h4v2H2v-6zm18 0v6h-6v-2h4v-4zM7.5 7a4.5 4.5 0 0 0 9 0h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7zM12 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M8 2v2l-4-.001V8H2V2zm14 0v6h-2V4h-4V2z"},[])]);
        }
    });
})();

export default IRemixBodyScan;
</script>