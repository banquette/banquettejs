<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixGovernment = /* @__PURE__ */ ((_) => {
    return r('government', {
        name: 'i-remix-government',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3zM6 5v1h12V5z"},[])]);
return h('svg',{"viewBox":c ? '1 3 22 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 19V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3v2h-1v11h1v2H1v-2zm11 0v-7h-2v7zm-5 0v-7H6v7zm10 0v-7h-2v7zM6 5v1h12V5z"},[])]);
        }
    });
})();

export default IRemixGovernment;
</script>