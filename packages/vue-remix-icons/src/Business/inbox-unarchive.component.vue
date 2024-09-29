<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixInboxUnarchive = /* @__PURE__ */ ((_) => {
    return r('inbox-unarchive', {
        name: 'i-remix-inbox-unarchive',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-8 1 4 4h-3v4h-2v-4H8zm6.764-5H5.236l-.999 2h15.527z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm-8 7-4 4h3v4h2v-4h3zm6.764-5H5.236l-.999 2h15.527z"},[])]);
        }
    });
})();

export default IRemixInboxUnarchive;
</script>