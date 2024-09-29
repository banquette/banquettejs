<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixContrast2 = /* @__PURE__ */ ((_) => {
    return r('contrast-2', {
        name: 'i-remix-contrast-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m-5-4.68a8.97 8.97 0 0 0 5.707-2.613A8.97 8.97 0 0 0 15.32 7 6 6 0 1 1 7 15.32"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m-6.671-5.575A8 8 0 1 0 16.425 5.328a9 9 0 0 1-2.304 8.793 9 9 0 0 1-8.792 2.304"},[])]);
        }
    });
})();

export default IRemixContrast2;
</script>