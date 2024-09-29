<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileWord2 = /* @__PURE__ */ ((_) => {
    return r('file-word-2', {
        name: 'i-remix-file-word-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.08 20 21.85' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306zM11 8h2v8h-2l-2-2-2 2H5V8h2l.01 5L9 11l2 1.989z"},[])]);
return h('svg',{"viewBox":c ? '2 1.08 20 21.85' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4zM2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM11 8v4.989L9 11l-1.99 2L7 8H5v8h2l2-2 2 2h2V8z"},[])]);
        }
    });
})();

export default IRemixFileWord2;
</script>