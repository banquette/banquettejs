<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixArrowUp = /* @__PURE__ */ ((_) => {
    return r('arrow-up', {
        name: 'i-remix-arrow-up',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4.22 4 15.56 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414z"},[])]);
return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 12v8h-2v-8H4l8-8 8 8z"},[])]);
        }
    });
})();

export default IRemixArrowUp;
</script>