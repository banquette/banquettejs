<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('compass-discover', {
        name: 'i-remix-compass-discover',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8.5L16 8l-3.5 9.002L11 13l-4-1.5z"},[])]);
return h('svg',{"viewBox":c ? '3 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 22C7.477 22 3 17.523 3 12S7.477 2 13 2s10 4.477 10 10-4.477 10-10 10zM8 11.5l4 1.5 1.5 4.002L17 8l-9 3.5z"},[])]);
        }
    });
})();
</script>