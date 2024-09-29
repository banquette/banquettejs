<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixImage = /* @__PURE__ */ ((_) => {
    return r('image', {
        name: 'i-remix-image',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18.02' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m4.828 21-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4"},[])]);
        }
    });
})();

export default IRemixImage;
</script>