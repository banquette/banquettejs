<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAdvertisement = /* @__PURE__ */ ((_) => {
    return r('advertisement', {
        name: 'i-remix-advertisement',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zM9.399 8l3.199 8h-2.155l-.4-1h-3.29l-.4 1H4.199l3.2-8zM19 8v8h-3a3 3 0 0 1 0-6h.999L17 8zm-2 4h-1a1 1 0 0 0-.117 1.993L16 14h1zm-8.601-1.115L7.552 13h1.692z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9.399 8h-2l-3.2 8h2.154l.4-1h3.29l.4 1h2.155zM19 8h-2v2h-1a3 3 0 0 0-.176 5.995L16 16h3zm-2 4v2h-1l-.117-.007a1 1 0 0 1 0-1.986L16 12zm-8.601-1.115L9.244 13H7.552z"},[])]);
        }
    });
})();

export default IRemixAdvertisement;
</script>