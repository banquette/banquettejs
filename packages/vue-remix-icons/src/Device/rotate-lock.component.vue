<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRotateLock = /* @__PURE__ */ ((_) => {
    return r('rotate-lock', {
        name: 'i-remix-rotate-lock',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v1h4zm-2-4a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.811 5.741L17 12h3a8 8 0 1 0-2.46 5.772l.998 1.795A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 5a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3m0 2a1 1 0 0 0-.993.883L11 10v1h2v-1a1 1 0 0 0-.883-.993z"},[])]);
        }
    });
})();

export default IRemixRotateLock;
</script>