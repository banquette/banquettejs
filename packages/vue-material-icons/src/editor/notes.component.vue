<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNotes = /* @__PURE__ */ ((_) => {
    return r('notes', {
        name: 'i-material-notes',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 11H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1M4 18h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M20 6H4c-.55 0-1 .45-1 1v.01c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"},[])]);
return h('svg',{"viewBox":c ? '3 6 18 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 18h12v-2H3zM3 6v2h18V6zm0 7h18v-2H3z"},[])]);
        }
    });
})();

export default IMaterialNotes;
</script>