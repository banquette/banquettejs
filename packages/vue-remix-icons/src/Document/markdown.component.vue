<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMarkdown = /* @__PURE__ */ ((_) => {
    return r('markdown', {
        name: 'i-remix-markdown',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 10.5H5v-7h2l2 2 2-2h2v7h-2v-4l-2 2-2-2zm11-3h2l-3 3-3-3h2v-4h2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 12.5v-4l2 2 2-2v4h2v-7h-2l-2 2-2-2H5v7zm11-3v-4h-2v4h-2l3 3 3-3z"},[])]);
        }
    });
})();

export default IRemixMarkdown;
</script>