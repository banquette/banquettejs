<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBearSmile = /* @__PURE__ */ ((_) => {
    return r('bear-smile', {
        name: 'i-remix-bear-smile',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.5 2a4.5 4.5 0 0 1 2.951 7.897A9 9 0 0 1 21 13 9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9 9 0 0 1 3.32 0A4.5 4.5 0 0 1 17.5 2m0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7 7 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4M10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.5 2a4.5 4.5 0 0 1 2.951 7.897A9 9 0 0 1 21 13 9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9 9 0 0 1 3.32 0A4.5 4.5 0 0 1 17.5 2M10 13H8a4 4 0 0 0 7.995.2L16 13h-2a2 2 0 0 1-3.995.15z"},[])]);
        }
    });
})();

export default IRemixBearSmile;
</script>