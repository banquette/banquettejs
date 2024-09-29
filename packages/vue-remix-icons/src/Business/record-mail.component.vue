<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRecordMail = /* @__PURE__ */ ((_) => {
    return r('record-mail', {
        name: 'i-remix-record-mail',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0 6 24 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.257 15a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2zM5.5 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"},[])]);
return h('svg',{"viewBox":c ? '0 6 24 11' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.743 15h4.514a5.5 5.5 0 1 1 4.243 2h-13a5.5 5.5 0 1 1 4.243-2M5.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"},[])]);
        }
    });
})();

export default IRemixRecordMail;
</script>