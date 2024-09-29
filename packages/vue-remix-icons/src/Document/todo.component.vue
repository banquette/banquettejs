<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTodo = /* @__PURE__ */ ((_) => {
    return r('todo', {
        name: 'i-remix-todo',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 0 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zm0 2v2h-2V4H9v2H7V4H5v16h14V4zM7 8h10v2H7zm0 4h10v2H7z"},[])]);
return h('svg',{"viewBox":c ? '3 0 18 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2zM7 8v2h10V8zm0 4v2h10v-2z"},[])]);
        }
    });
})();

export default IRemixTodo;
</script>