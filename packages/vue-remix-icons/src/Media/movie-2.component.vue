<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMovie2 = /* @__PURE__ */ ((_) => {
    return r('movie-2', {
        name: 'i-remix-movie-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2 6h-2.708A8 8 0 1 0 12 20m0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-3.999 8M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixMovie2;
</script>