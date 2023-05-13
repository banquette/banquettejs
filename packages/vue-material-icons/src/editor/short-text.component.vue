<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('short-text', {
        name: 'i-material-short-text',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 9 16 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 9h16v2H4zm0 4h10v2H4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 9 16 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 9h14c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zm0 4h8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z"},[])]);
return h('svg',{"viewBox":c ? '4 9 16 6' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 9h16v2H4V9zm0 4h10v2H4v-2z"},[])]);
        }
    });
})();
</script>