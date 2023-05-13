<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('call-received', {
        name: 'i-material-call-received',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 4 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4.42 14.58 14.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19.3 4.71a.996.996 0 0 0-1.41 0L7 15.59V10c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1H8.41L19.3 6.11c.38-.38.38-1.02 0-1.4z"},[])]);
if (v === 'outlined' || v === 'sharp')
    return h('svg',{"viewBox":c ? '5 4 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41z"},[])]);
return h('svg',{"viewBox":c ? '5 4 15 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z"},[])]);
        }
    });
})();
</script>