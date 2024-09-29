<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBackupTable = /* @__PURE__ */ ((_) => {
    return r('backup-table', {
        name: 'i-material-backup-table',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z","opacity":"0.3"},[]),h('path',{d:"M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z"},[]),h('path',{d:"M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 4h12v5H4zm5 12H4v-5h5zm2-5h5v5h-5z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6v14H6v2h16V6z"},[]),h('path',{d:"M18 2H2v16h16zM9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 7v13h13c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2-.9-2-2V7c0-.55.45-1 1-1s1 .45 1 1"},[]),h('path',{d:"M6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2m9 7h5v5h-5zm-7 0h5v5H8zm0-7h12v5H8z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z"},[]),h('path',{d:"M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z"},[])]);
        }
    });
})();

export default IMaterialBackupTable;
</script>