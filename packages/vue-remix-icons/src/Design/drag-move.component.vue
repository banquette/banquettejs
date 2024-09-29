<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDragMove = /* @__PURE__ */ ((_) => {
    return r('drag-move', {
        name: 'i-remix-drag-move',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 2 4.243 4.243-1.415 1.414L12 4.828 9.172 7.657 7.757 6.243zM2 12l4.243-4.243 1.414 1.415L4.828 12l2.829 2.828-1.414 1.415zm20 0-4.243 4.243-1.414-1.415L19.172 12l-2.829-2.828 1.414-1.415zm-10 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 8-4.243-4.243 1.415-1.414L12 19.172l2.828-2.829 1.415 1.414z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 22-4-4h8zm0-20 4 4H8zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4M2 12l4-4v8zm20 0-4 4V8z"},[])]);
        }
    });
})();

export default IRemixDragMove;
</script>