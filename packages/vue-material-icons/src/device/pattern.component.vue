<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialPattern = /* @__PURE__ */ ((_) => {
    return r('pattern', {
        name: 'i-material-pattern',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m2 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-.02 6c-.74 0-1.37.4-1.72 1h-2.54a1.98 1.98 0 0 0-3.44 0H8.41l3.07-3.07c.17.04.34.07.52.07 1.1 0 2-.9 2-2 0-.18-.03-.35-.07-.51l3.56-3.56c.16.04.33.07.51.07 1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .18.03.35.07.51l-3.56 3.56c-.16-.04-.33-.07-.51-.07-1.1 0-2 .9-2 2 0 .18.03.35.07.51l-3.56 3.56C6.35 16.03 6.18 16 6 16c-1.1 0-2 .9-2 2s.9 2 2 2c.74 0 1.37-.4 1.72-1h2.57a1.98 1.98 0 0 0 3.44 0h2.55c.34.6.98 1 1.72 1 1.1 0 2-.9 2-2-.02-1.1-.92-2-2.02-2"},[])]);
        }
    });
})();

export default IMaterialPattern;
</script>