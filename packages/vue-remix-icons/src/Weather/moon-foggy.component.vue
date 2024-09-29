<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMoonFoggy = /* @__PURE__ */ ((_) => {
    return r('moon-foggy', {
        name: 'i-remix-moon-foggy',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2.04 20 19.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 20.334v-2.199a7.52 7.52 0 0 0 3.623-4.281 9 9 0 0 1-10.622-8.99A7.52 7.52 0 0 0 5.151 10H3.117a9.505 9.505 0 0 1 8.538-7.963 7 7 0 0 0 10.316 8.728A9.5 9.5 0 0 1 16 20.335zM7 20h7v2H7zm-3-8h6v2H4zm-2 4h10v2H2z"},[])]);
return h('svg',{"viewBox":c ? '2 2.21 19.99 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 20.334V18h-2v-4H3.332A9.5 9.5 0 0 1 3 11.5c0-4.56 3.213-8.37 7.5-9.289a8 8 0 0 0 11.49 9.724 9.5 9.5 0 0 1-5.99 8.4zM7 20h7v2H7zm-5-4h10v2H2z"},[])]);
        }
    });
})();

export default IRemixMoonFoggy;
</script>