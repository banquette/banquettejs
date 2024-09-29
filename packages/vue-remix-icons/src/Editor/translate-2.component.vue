<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTranslate2 = /* @__PURE__ */ ((_) => {
    return r('translate-2', {
        name: 'i-remix-translate-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 20.9 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18.5 10 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10zM10 2v2h6v2h-1.968a18.2 18.2 0 0 1-3.62 6.301 15 15 0 0 0 2.336 1.707l-.751 1.878A17 17 0 0 1 9 13.725a16.7 16.7 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18 18 0 0 1 4.767 8h2.24A16 16 0 0 0 9 10.877a16.2 16.2 0 0 0 2.91-4.876L2 6V4h6V2zm7.5 10.885L16.253 16h2.492z"},[])]);
        }
    });
})();

export default IRemixTranslate2;
</script>