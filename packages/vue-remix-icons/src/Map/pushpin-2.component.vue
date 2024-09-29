<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPushpin2 = /* @__PURE__ */ ((_) => {
    return r('pushpin-2', {
        name: 'i-remix-pushpin-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5 3 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3zM9 5v6.606L7.404 14h9.192L15 11.606V5z"},[])]);
return h('svg',{"viewBox":c ? '5 3 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3z"},[])]);
        }
    });
})();

export default IRemixPushpin2;
</script>