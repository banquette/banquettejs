<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFileList3 = /* @__PURE__ */ ((_) => {
    return r('file-list-3', {
        name: 'i-remix-file-list-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3m-1-5v2a1 1 0 0 0 2 0v-2zm-2 3V4H4v15a1 1 0 0 0 1 1zM6 7h8v2H6zm0 4h8v2H6zm0 4h5v2H6z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3m-1-5v2a1 1 0 0 0 2 0v-2zM6 7v2h8V7zm0 4v2h8v-2zm0 4v2h5v-2z"},[])]);
        }
    });
})();

export default IRemixFileList3;
</script>