<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHandSanitizer = /* @__PURE__ */ ((_) => {
    return r('hand-sanitizer', {
        name: 'i-remix-hand-sanitizer',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3.7 2 16.3 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2v2l-4-.001V6h3v2c2.21 0 4 1.79 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8c0-2.21 1.79-4 4-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2zm-1 8H8a2 2 0 0 0-2 2v8h12v-8a2 2 0 0 0-2-2m-3 2v2h2v2h-2.001L13 18h-2l-.001-2H9v-2h2v-2z"},[])]);
return h('svg',{"viewBox":c ? '3.7 2 16.3 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17 2v2l-4-.001V6h3v2c2.21 0 4 1.79 4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8c0-2.21 1.79-4 4-4V6h3V3.999L7.5 4c-.63 0-1.37.49-2.2 1.6L3.7 4.4C4.87 2.84 6.13 2 7.5 2zm-4 10h-2v2H9v2h1.999L11 18h2l-.001-2H15v-2h-2z"},[])]);
        }
    });
})();

export default IRemixHandSanitizer;
</script>