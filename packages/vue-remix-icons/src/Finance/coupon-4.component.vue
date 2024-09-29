<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCoupon4 = /* @__PURE__ */ ((_) => {
    return r('coupon-4', {
        name: 'i-remix-coupon-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0m-1.465-2A4 4 0 0 1 12 17c1.48 0 2.773.804 3.465 2H20V5h-4.535A4 4 0 0 1 12 7a4 4 0 0 1-3.465-2H4v14zM6 8h2v8H6zm10 0h2v8h-2z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0M6 8v8h2V8zm10 0v8h2V8z"},[])]);
        }
    });
})();

export default IRemixCoupon4;
</script>