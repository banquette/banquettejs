<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolderShield2 = /* @__PURE__ */ ((_) => {
    return r('folder-shield-2', {
        name: 'i-remix-folder-shield-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 9h-2V7h-8.414l-2-2H4v14h7.447a4.97 4.97 0 0 0 1.664 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-9 2h9v5.949c0 .99-.501 1.916-1.336 2.465L17.5 21.498l-3.164-2.084A2.95 2.95 0 0 1 13 16.95zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.95.95 0 0 0 .436-.795V13h-5z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 10H12v7.382c0 1.409.632 2.734 1.705 3.618H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-8 2h8v5.382c0 .897-.446 1.734-1.187 2.23L18 21.499l-2.813-1.885A2.69 2.69 0 0 1 14 17.383z"},[])]);
        }
    });
})();

export default IRemixFolderShield2;
</script>