<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLayout = /* @__PURE__ */ ((_) => {
    return r('layout', {
        name: 'i-remix-layout',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 8h14V5H5zm9 11v-9H5v9zm2 0h3v-9h-3zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 21V10h5v10a1 1 0 0 1-1 1zm-2 0H4a1 1 0 0 1-1-1V10h11zm7-13H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z"},[])]);
        }
    });
})();

export default IRemixLayout;
</script>