<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('arrow-up-down', {
        name: 'i-remix-arrow-up-down',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.05 3 19.9 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m11.95 7.95-1.414 1.414L8 6.828V20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8-5 5-5-5h4V4h2v12h4z"},[])]);
        }
    });
})();
</script>