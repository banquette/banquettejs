<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixBookRead = /* @__PURE__ */ ((_) => {
    return r('book-read', {
        name: 'i-remix-book-read',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM11 5H4v14h7zm2 0v14h7V5zm1 2h5v2h-5zm0 3h5v2h-5z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM12 5v14h8V5zm1 2h6v2h-6zm0 3h6v2h-6z"},[])]);
        }
    });
})();

export default IRemixBookRead;
</script>