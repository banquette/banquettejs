<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialHighQuality = /* @__PURE__ */ ((_) => {
    return r('high-quality', {
        name: 'i-material-high-quality',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 6H5v12h14zm-8 9H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm-3.5-3.5h2v3h-2z","opacity":"0.3"},[]),h('path',{d:"M3 6v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2m2 0h14v12H5zm4.5 5.5h-2V9H6v6h1.5v-2h2v2H11V9H9.5zM17 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h.75v1.5h1.5V15H17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-.5 4.5h-2v-3h2z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 4H3v16h18zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm7 0h-1.75v1.5h-1.5V15H13V9h5zm-3.5-1.5h2v-3h-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8.75 11c-.41 0-.75-.34-.75-.75V13h-2v1.25c0 .41-.34.75-.75.75S6 14.66 6 14.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2V9.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75M18 14c0 .55-.45 1-1 1h-.75v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm-3.5-.5h2v-3h-2z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H5V6h14zM7.5 13h2v2H11V9H9.5v2.5h-2V9H6v6h1.5zm6.5 2h.75v1.5h1.5V15H17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m.5-4.5h2v3h-2z"},[])]);
return h('svg',{"viewBox":c ? '3 4 18 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1zm-3.5-.5h2v-3h-2z"},[])]);
        }
    });
})();

export default IMaterialHighQuality;
</script>