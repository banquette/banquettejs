<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixToggle = /* @__PURE__ */ ((_) => {
    return r('toggle', {
        name: 'i-remix-toggle',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 7a5 5 0 1 0 0 10h8a5 5 0 0 0 0-10zm0-2h8a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5m0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 5h8a7 7 0 0 1 0 14H8A7 7 0 0 1 8 5m8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"},[])]);
        }
    });
})();

export default IRemixToggle;
</script>