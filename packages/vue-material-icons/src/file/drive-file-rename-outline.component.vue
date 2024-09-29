<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDriveFileRenameOutline = /* @__PURE__ */ ((_) => {
    return r('drive-file-rename-outline', {
        name: 'i-material-drive-file-rename-outline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.06 10.02 5 17.08V18h.92l7.06-7.06z","opacity":"0.3"},[]),h('path',{d:"m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zM5.92 18H5v-.92l7.06-7.06.92.92zm12.79-9.96a.996.996 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 4.08 18 15.92' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zm1.072-1.067 2.539-2.539 3.747 3.748L16.88 9.87z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15 16-4 4h8c1.1 0 2-.9 2-2s-.9-2-2-2zm-2.94-8.81-8.77 8.77c-.18.18-.29.44-.29.7V19c0 .55.45 1 1 1h2.34c.27 0 .52-.11.71-.29l8.77-8.77zm6.65.85a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m15 16-4 4h10v-4zm-2.94-8.81L3 16.25V20h3.75l9.06-9.06zM5.92 18H5v-.92l7.06-7.06.92.92zm12.79-9.96a.996.996 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"},[])]);
return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83M6.21 18H5v-1.21l8.66-8.66 1.21 1.21zM11 20l4-4h6v4z"},[])]);
        }
    });
})();

export default IMaterialDriveFileRenameOutline;
</script>