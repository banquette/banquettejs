<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixServer = /* @__PURE__ */ ((_) => {
    return r('server', {
        name: 'i-remix-server',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 11h14V5H5zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1m-2 9H5v6h14zM7 15h3v2H7zm0-8h3v2H7z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 3h16a1 1 0 0 1 1 1v7H3V4a1 1 0 0 1 1-1M3 13h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 3v2h3v-2zM7 6v2h3V6z"},[])]);
        }
    });
})();

export default IRemixServer;
</script>