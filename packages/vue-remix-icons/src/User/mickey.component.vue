<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMickey = /* @__PURE__ */ ((_) => {
    return r('mickey', {
        name: 'i-remix-mickey',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.99 2 22.01 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 2a4.5 4.5 0 0 1 .883 8.913l.011.027a8 8 0 0 1-7.145 11.056L12 22a8 8 0 0 1-7.382-11.088A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254l.073-.019A8 8 0 0 1 12 6l.25.004a8 8 0 0 1 1.756.25A4.5 4.5 0 0 1 18.5 2M12 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12M5.5 4a2.5 2.5 0 0 0 0 5l.164-.005.103-.01A8 8 0 0 1 7.594 7.32l.33-.206A2.5 2.5 0 0 0 5.5 4m13 0a2.5 2.5 0 0 0-2.466 2.916l.043.2.028.016a8 8 0 0 1 2.128 1.852A2.5 2.5 0 1 0 18.5 4"},[])]);
return h('svg',{"viewBox":c ? '0.99 2 22.01 19.99' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.5 2a4.5 4.5 0 0 1 .883 8.913 8 8 0 1 1-14.765-.001A4.499 4.499 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A8 8 0 0 1 12 6a8 8 0 0 1 2.006.254A4.5 4.5 0 0 1 18.5 2"},[])]);
        }
    });
})();

export default IRemixMickey;
</script>