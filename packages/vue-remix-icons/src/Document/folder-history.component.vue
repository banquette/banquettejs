<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolderHistory = /* @__PURE__ */ ((_) => {
    return r('folder-history', {
        name: 'i-remix-folder-history',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-.828 2H4v14h16V7h-8.414zM13 9v4h3v2h-5V9z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM13 9h-2v6h5v-2h-3z"},[])]);
        }
    });
})();

export default IRemixFolderHistory;
</script>