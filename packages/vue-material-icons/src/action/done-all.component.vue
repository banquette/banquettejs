<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialDoneAll = /* @__PURE__ */ ((_) => {
    return r('done-all', {
        name: 'i-material-done-all',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '0.83 6 22.41 12.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.3 6.3a.996.996 0 0 0-1.41 0l-5.64 5.64 1.41 1.41L17.3 7.7c.38-.38.38-1.02 0-1.4m4.24-.01-9.88 9.88-3.48-3.47a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L22.95 7.71a.996.996 0 0 0 0-1.41h-.01a.975.975 0 0 0-1.4-.01M1.12 14.12 5.3 18.3c.39.39 1.02.39 1.41 0l.7-.7-4.88-4.9a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42"},[])]);
return h('svg',{"viewBox":c ? '0.41 5.59 23.25 13.41' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"},[])]);
        }
    });
})();

export default IMaterialDoneAll;
</script>