<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolderForbid = /* @__PURE__ */ ((_) => {
    return r('folder-forbid', {
        name: 'i-remix-folder-forbid',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11.255a7 7 0 0 0-2-.965V7h-8.414l-2-2H4v14h7.29a7 7 0 0 0 .965 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM18 22a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001z"},[])]);
return h('svg',{"viewBox":c ? '2 3 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11.255A7 7 0 0 0 12.255 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM18 22a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001l-4.001 4zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001z"},[])]);
        }
    });
})();

export default IRemixFolderForbid;
</script>