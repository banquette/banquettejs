<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixArrowGoBack = /* @__PURE__ */ ((_) => {
    return r('arrow-go-back', {
        name: 'i-remix-arrow-go-back',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.05 19 19.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m5.828 7 2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12z"},[])]);
return h('svg',{"viewBox":c ? '2 1 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12z"},[])]);
        }
    });
})();

export default IRemixArrowGoBack;
</script>