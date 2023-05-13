<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('remove', {
        name: 'i-material-remove',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '5 11 14 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"},[])]);
return h('svg',{"viewBox":c ? '5 11 14 2' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 13H5v-2h14v2z"},[])]);
        }
    });
})();
</script>