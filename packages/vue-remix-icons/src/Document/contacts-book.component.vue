<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixContactsBook = /* @__PURE__ */ ((_) => {
    return r('contacts-book', {
        name: 'i-remix-contacts-book',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3zm4 2H5v16h2zm2 16h10V4H9zm2-4a3 3 0 0 1 6 0zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8-6h2v4h-2zm0 6h2v4h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 21 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 2v20H3V2zm2 0h10.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9zm13 4h2v4h-2zm0 6h2v4h-2zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-3 4h6a3 3 0 0 0-6 0"},[])]);
        }
    });
})();

export default IRemixContactsBook;
</script>