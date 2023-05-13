<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('phone-camera', {
        name: 'i-remix-phone-camera',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 3 23 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.803 4a5.96 5.96 0 0 0-.72 2H3v12h18v-5.083a5.96 5.96 0 0 0 2-.72V19a.996.996 0 0 1-1.002 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1h12.8zM20 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-2 2h2v3h-2v-3z"},[])]);
return h('svg',{"viewBox":c ? '1 3 23 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.803 4A6 6 0 0 0 23 12.197V19a.996.996 0 0 1-1.002 1.001H2.002A1 1 0 0 1 1 19V5c0-.552.44-1 1.002-1h12.8zM20 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-1 6v3h2v-3h-2z"},[])]);
        }
    });
})();
</script>