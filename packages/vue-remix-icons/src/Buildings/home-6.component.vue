<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHome6 = /* @__PURE__ */ ((_) => {
    return r('home-6', {
        name: 'i-remix-home-6',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2.27 18 18.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444-7 5.444V19zM7 15h10v2H7z"},[])]);
return h('svg',{"viewBox":c ? '3 2.27 18 18.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79zM7 15v2h10v-2z"},[])]);
        }
    });
})();

export default IRemixHome6;
</script>