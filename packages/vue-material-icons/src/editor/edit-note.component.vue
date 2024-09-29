<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialEditNote = /* @__PURE__ */ ((_) => {
    return r('edit-note', {
        name: 'i-material-edit-note',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 6 18.54 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13 1.41-1.41 2.12 2.12-1.41 1.41zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 6 18.13 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 11c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h9c.55 0 1 .45 1 1M3 7c0 .55.45 1 1 1h9c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1m7 8c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1m8.01-2.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.16 5.16c-.09.09-.14.21-.14.35v1.41c0 .28.22.5.5.5h1.41c.13 0 .26-.05.35-.15l5.16-5.16z"},[])]);
return h('svg',{"viewBox":c ? '3 6 18.13 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 10h11v2H3zm0-2h11V6H3zm0 8h7v-2H3zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71zm-.71.71-5.3 5.3V21h2.12l5.3-5.3z"},[])]);
        }
    });
})();

export default IMaterialEditNote;
</script>