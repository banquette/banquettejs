<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHomeHeart = /* @__PURE__ */ ((_) => {
    return r('home-heart', {
        name: 'i-remix-home-heart',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zm-2-1V9.157l-6-5.454-6 5.454V19zm-6-2-3.359-3.359a2.25 2.25 0 1 1 3.182-3.182l.177.177.177-.177a2.25 2.25 0 1 1 3.182 3.182z"},[])]);
return h('svg',{"viewBox":c ? '1 1.35 22 19.65' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zm-8-3 3.359-3.359a2.25 2.25 0 1 0-3.182-3.182l-.177.177-.177-.177a2.25 2.25 0 1 0-3.182 3.182z"},[])]);
        }
    });
})();

export default IRemixHomeHeart;
</script>