<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDragDrop = /* @__PURE__ */ ((_) => {
    return r('drag-drop', {
        name: 'i-remix-drag-drop',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20.96 20.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16 13 6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5zM4 14v2H2v-2zm0-4v2H2v-2zm0-4v2H2V6zm0-4v2H2V2zm4 0v2H6V2zm4 0v2h-2V2zm4 0v2h-2V2z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 6h2v2h5a1 1 0 0 1 1 1v7.5L16 13l.036 8.062 2.223-2.15L20.041 22H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5zm8 11.338V21a1 1 0 0 1-.048.307l-1.96-3.394zM4 14v2H2v-2zm0-4v2H2v-2zm0-4v2H2V6zm0-4v2H2V2zm4 0v2H6V2zm4 0v2h-2V2zm4 0v2h-2V2z"},[])]);
        }
    });
})();

export default IRemixDragDrop;
</script>