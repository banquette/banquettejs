<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('centos', {
        name: 'i-remix-centos',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 2 4.292 4.292 1.061-1.06L16.121 4H20v3.879l-1.233-1.233-1.06 1.061L22 12l-4.292 4.293 1.059 1.059L20 16.121V20h-3.88l1.232-1.233-1.059-1.06L12 22l-4.293-4.293-1.061 1.06L7.879 20H4v-3.88l1.231 1.232 1.061-1.06L2 12l4.293-4.293-1.062-1.061L4 7.879V4h3.879L6.646 5.23l1.062 1.062L12 2zm0 11.413-2.88 2.879 2.88 2.88 2.879-2.88L12 13.412zM7.707 9.12 4.828 12l2.878 2.878 2.88-2.88-2.879-2.877zm8.585 0-2.877 2.878 2.878 2.879L19.172 12l-2.88-2.879zM12 4.828 9.122 7.707l2.879 2.878 2.877-2.879L12 4.828z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 13.06 4.47 4.471L12 22l-4.47-4.47L12 13.06zm-8 3.06L7.879 20H4v-3.88zm16 0V20h-3.88L20 16.12zm-2.47-8.59L22 12l-4.469 4.47-4.47-4.47 4.469-4.47zm-11.06 0L10.94 12l-4.471 4.469L2 12l4.47-4.47zM12 2l4.469 4.469L12 10.939 7.53 6.47 12 2zM7.879 4l-3.88 3.879L4 4h3.879zM20 4v3.879l-3.88-3.88L20 4z"},[])]);
        }
    });
})();
</script>