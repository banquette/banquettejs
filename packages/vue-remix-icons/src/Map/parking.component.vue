<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('parking', {
        name: 'i-remix-parking',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '6 3 13 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 3h7a6 6 0 1 1 0 12H8v6H6V3zm2 2v8h5a4 4 0 1 0 0-8H8z"},[])]);
return h('svg',{"viewBox":c ? '6 3 13 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 3h7a6 6 0 1 1 0 12h-3v6H6V3zm4 4v4h3a2 2 0 1 0 0-4h-3z"},[])]);
        }
    });
})();
</script>