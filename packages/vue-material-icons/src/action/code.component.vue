<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCode = /* @__PURE__ */ ((_) => {
    return r('code', {
        name: 'i-material-code',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '2.42 6.41 19.16 11.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.7 15.9 4.8 12l3.9-3.9a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 0 0 0-1.4m6.6 0 3.9-3.9-3.9-3.9a.984.984 0 0 1 0-1.4.984.984 0 0 1 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 0 1-1.4 0 .984.984 0 0 1 0-1.4"},[])]);
return h('svg',{"viewBox":c ? '2 6 20 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"},[])]);
        }
    });
})();

export default IMaterialCode;
</script>