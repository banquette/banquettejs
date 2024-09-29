<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialMinimize = /* @__PURE__ */ ((_) => {
    return r('minimize', {
        name: 'i-material-minimize',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6 19 12 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1"},[])]);
return h('svg',{"viewBox":c ? '6 19 12 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 19h12v2H6z"},[])]);
        }
    });
})();

export default IMaterialMinimize;
</script>