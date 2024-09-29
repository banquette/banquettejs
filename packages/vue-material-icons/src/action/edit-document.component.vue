<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialEditDocument = /* @__PURE__ */ ((_) => {
    return r('edit-document', {
        name: 'i-material-edit-document',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '4 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 19.88V22h2.12l5.17-5.17-2.12-2.12zM20 8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H12v-2.95l8-8zm-7 1V3.5L18.5 9zm9.71 5-.71-.71a.996.996 0 0 0-1.41 0l-.71.71L22 16.12l.71-.71a.996.996 0 0 0 0-1.41"},[])]);
        }
    });
})();

export default IMaterialEditDocument;
</script>