<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolderKeyhole = /* @__PURE__ */ ((_) => {
    return r('folder-keyhole', {
        name: 'i-remix-folder-keyhole',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-.828 2H4v14h16V7h-8.414zM12 9a2 2 0 0 1 1.001 3.732L13 17h-2v-4.268A2 2 0 0 1 12 9"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM12 9a2 2 0 0 0-1 3.732V17h2l.001-4.268A2 2 0 0 0 12 9"},[])]);
        }
    });
})();

export default IRemixFolderKeyhole;
</script>