<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialWineBar = /* @__PURE__ */ ((_) => {
    return r('wine-bar', {
        name: 'i-material-wine-bar',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 13c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3","opacity":"0.3"},[]),h('path',{d:"M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3zm6 10c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3m4-5H8V5h8z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 3c-.55 0-1 .45-1 1v5c0 2.97 2.16 5.43 5 5.91V19H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-2v-4.09c2.84-.48 5-2.94 5-5.91V4c0-.55-.45-1-1-1zm9 5H8V5h8z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3zm6 10c-1.86 0-3.41-1.28-3.86-3h7.72c-.45 1.72-2 3-3.86 3m4-5H8V5h8z"},[])]);
return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 3v6c0 2.97 2.16 5.43 5 5.91V19H8v2h8v-2h-3v-4.09c2.84-.48 5-2.94 5-5.91V3zm10 5H8V5h8z"},[])]);
        }
    });
})();

export default IMaterialWineBar;
</script>