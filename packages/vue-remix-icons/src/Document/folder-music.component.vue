<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFolderMusic = /* @__PURE__ */ ((_) => {
    return r('folder-music', {
        name: 'i-remix-folder-music',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 8.05V9h5v2h-3v4.5a2.5 2.5 0 1 1-2-2.45"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 13.05a2.5 2.5 0 1 0 2 2.45V11h3V9h-5z"},[])]);
        }
    });
})();

export default IRemixFolderMusic;
</script>