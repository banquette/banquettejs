<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCopperDiamond = /* @__PURE__ */ ((_) => {
    return r('copper-diamond', {
        name: 'i-remix-copper-diamond',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16M9 8h6l2.5 3.5L12 17l-5.5-5.5zm1.03 2-.92 1.29L12 14.18l2.89-2.89-.92-1.29z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M9.5 9 7 11.5l5 5 5-5L14.5 9z"},[])]);
        }
    });
})();

export default IRemixCopperDiamond;
</script>