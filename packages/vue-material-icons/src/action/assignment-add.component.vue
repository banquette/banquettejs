<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAssignmentAdd = /* @__PURE__ */ ((_) => {
    return r('assignment-add', {
        name: 'i-material-assignment-add',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 1 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"},[]),h('path',{d:"M11.69 15c.36-.75.84-1.43 1.43-2H7v-2h11c1.07 0 2.09.25 3 .69V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.69c-.44-.91-.69-1.93-.69-3 0-.34.03-.67.08-1H7v-2zM12 2.75c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75M7 7h10v2H7z"},[])]);
        }
    });
})();

export default IMaterialAssignmentAdd;
</script>