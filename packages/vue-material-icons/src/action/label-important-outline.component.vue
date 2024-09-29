<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialLabelImportantOutline = /* @__PURE__ */ ((_) => {
    return r('label-important-outline', {
        name: 'i-material-label-important-outline',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.03 19H3l4.5-7L3 5h13.03L21 12zM6.5 17H15l3.5-5L15 7H6.5l3.5 5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3.83 5 16.95 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 19H4.83c-.79 0-1.27-.88-.84-1.54L7.5 12 3.99 6.54C3.56 5.88 4.04 5 4.83 5H15c.65 0 1.26.31 1.63.84l3.96 5.58c.25.35.25.81 0 1.16l-3.96 5.58c-.37.52-.98.84-1.63.84m-8.5-2H15l3.5-5L15 7H6.5l3.5 5z"},[])]);
return h('svg',{"viewBox":c ? '3 5 18 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 19H3l4.5-7L3 5h12c.65 0 1.26.31 1.63.84L21 12l-4.37 6.16c-.37.52-.98.84-1.63.84m-8.5-2H15l3.5-5L15 7H6.5l3.5 5z"},[])]);
        }
    });
})();

export default IMaterialLabelImportantOutline;
</script>