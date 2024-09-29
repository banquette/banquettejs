<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBookOpen = /* @__PURE__ */ ((_) => {
    return r('book-open', {
        name: 'i-remix-book-open',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a4 4 0 0 1 3 1.354A4 4 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm7-2V5h-5a2 2 0 0 0-2 2v12zm-9 0V7a2 2 0 0 0-2-2H4v14z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1m-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3zm0 0h2v2h-2z"},[])]);
        }
    });
})();

export default IRemixBookOpen;
</script>