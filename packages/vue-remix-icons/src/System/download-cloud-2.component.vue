<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDownloadCloud2 = /* @__PURE__ */ ((_) => {
    return r('download-cloud-2', {
        name: 'i-remix-download-cloud-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.99 2 22.01 20.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 13v5.585l1.828-1.828 1.415 1.415L12 22.414l-4.243-4.242 1.415-1.415L11 18.585V13zM12 2a7 7 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2"},[])]);
return h('svg',{"viewBox":c ? '0.99 2 22.01 20.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 13v5.585l1.828-1.828 1.415 1.415L12 22.414l-4.243-4.242 1.415-1.415L11 18.585V13zM12 2a7 7 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784L18 17a6 6 0 0 0-11.996-.225L6 17v1.978a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2"},[])]);
        }
    });
})();

export default IRemixDownloadCloud2;
</script>