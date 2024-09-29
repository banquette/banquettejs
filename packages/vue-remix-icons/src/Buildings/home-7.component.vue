<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHome7 = /* @__PURE__ */ ((_) => {
    return r('home-7', {
        name: 'i-remix-home-7',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454-6 5.454zm6-4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"},[])]);
return h('svg',{"viewBox":c ? '0 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H0l10.327-9.388a1 1 0 0 1 1.346 0L22 11h-3zm-8-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},[])]);
        }
    });
})();

export default IRemixHome7;
</script>