<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixDeleteBack = /* @__PURE__ */ ((_) => {
    return r('delete-back', {
        name: 'i-remix-delete-back',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.2 3 21.8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m.535 2-4.666 7 4.666 7H20V5zM16 11v2H9v-2z"},[])]);
return h('svg',{"viewBox":c ? '0.2 3 21.8 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3M16 11H9v2h7z"},[])]);
        }
    });
})();

export default IRemixDeleteBack;
</script>