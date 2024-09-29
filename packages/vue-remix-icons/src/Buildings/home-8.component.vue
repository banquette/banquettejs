<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHome8 = /* @__PURE__ */ ((_) => {
    return r('home-8', {
        name: 'i-remix-home-8',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1M6 19h12V9.157l-6-5.454-6 5.454zm3-9h6v6H9zm2 2v2h2v-2z"},[])]);
return h('svg',{"viewBox":c ? '1 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zM9 10v6h6v-6zm2 2h2v2h-2z"},[])]);
        }
    });
})();

export default IRemixHome8;
</script>