<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixArtboard = /* @__PURE__ */ ((_) => {
    return r('artboard', {
        name: 'i-remix-artboard',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1m1 2v7h12V5z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18.66' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1"},[])]);
        }
    });
})();

export default IRemixArtboard;
</script>