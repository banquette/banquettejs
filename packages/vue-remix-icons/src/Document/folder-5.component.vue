<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolder5 = /* @__PURE__ */ ((_) => {
    return r('folder-5', {
        name: 'i-remix-folder-5',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.09 3 19.83 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.087 9h17.826a1 1 0 0 1 .997 1.083l-.834 10a1 1 0 0 1-.996.917H3.92a1 1 0 0 1-.996-.917l-.834-10A1 1 0 0 1 3.087 9M4.84 19h14.32l.666-8H4.174zm8.574-14H20a1 1 0 0 1 1 1v1H3V4a1 1 0 0 1 1-1h7.414z"},[])]);
return h('svg',{"viewBox":c ? '2.09 3 19.83 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13.414 5H20a1 1 0 0 1 1 1v1H3V4a1 1 0 0 1 1-1h7.414zM3.087 9h17.826a1 1 0 0 1 .997 1.083l-.834 10a1 1 0 0 1-.996.917H3.92a1 1 0 0 1-.996-.917l-.834-10A1 1 0 0 1 3.087 9"},[])]);
        }
    });
})();

export default IRemixFolder5;
</script>