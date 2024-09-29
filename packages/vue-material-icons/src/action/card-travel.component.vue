<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialCardTravel = /* @__PURE__ */ ((_) => {
    return r('card-travel', {
        name: 'i-material-card-travel',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 17h16v2H4zm13-7h-2V8H9v2H7V8H4v6h16V8h-3z","opacity":"0.3"},[]),h('path',{d:"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 6h-5V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v15h20zM9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V9c0-.55.45-1 1-1h2v1c0 .55.45 1 1 1s1-.45 1-1V8h6v1c0 .55.45 1 1 1s1-.45 1-1V8h2c.55 0 1 .45 1 1z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9zm11 15H4v-2h16zm0-5H4V8h3v2h2V8h6v2h2V8h3z"},[])]);
        }
    });
})();

export default IMaterialCardTravel;
</script>