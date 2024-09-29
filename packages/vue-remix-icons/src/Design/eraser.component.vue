<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEraser = /* @__PURE__ */ ((_) => {
    return r('eraser', {
        name: 'i-remix-eraser',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.22 2.2 20.38 18.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m8.586 8.858-4.95 4.95 5.194 5.194H10V19h1.172l3.778-3.778zM10 7.444l6.364 6.364 2.828-2.829-6.364-6.364zM14 19h7v2h-9l-3.998.002-6.487-6.487a1 1 0 0 1 0-1.414L12.12 2.494a1 1 0 0 1 1.415 0l7.778 7.778a1 1 0 0 1 0 1.414z"},[])]);
return h('svg',{"viewBox":c ? '1.22 2.2 20.38 18.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 19h7v2h-9l-3.998.002-6.487-6.487a1 1 0 0 1 0-1.414L12.12 2.494a1 1 0 0 1 1.415 0l7.778 7.778a1 1 0 0 1 0 1.414zm1.657-4.485 3.535-3.536-6.364-6.364-3.535 3.536z"},[])]);
        }
    });
})();

export default IRemixEraser;
</script>