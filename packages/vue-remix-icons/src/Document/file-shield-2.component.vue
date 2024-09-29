<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileShield2 = /* @__PURE__ */ ((_) => {
    return r('file-shield-2', {
        name: 'i-remix-file-shield-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 9V4H5v16h6.056a5 5 0 0 0 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.95 2.95 0 0 1 12 16.95zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.95.95 0 0 0 .436-.795V13h-5z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 10H11v7.382c0 1.563.777 3.023 2.074 3.892l1.083.726H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.447 2 3.998 2h11.999L21 7zm-8 2h8v5.382c0 .897-.446 1.734-1.187 2.23L17 21.499l-2.813-1.885A2.69 2.69 0 0 1 13 17.383z"},[])]);
        }
    });
})();

export default IRemixFileShield2;
</script>