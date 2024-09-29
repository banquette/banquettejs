<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPriceTag3 = /* @__PURE__ */ ((_) => {
    return r('price-tag-3', {
        name: 'i-remix-price-tag-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1.41 2.1 20.8 20.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.9 2.1 9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829"},[])]);
return h('svg',{"viewBox":c ? '1.41 2.1 20.8 20.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.9 2.1 9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829"},[])]);
        }
    });
})();

export default IRemixPriceTag3;
</script>