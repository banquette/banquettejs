<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('battery-60', {
        name: 'i-material-battery-60',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '7 2 10 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{"fill-opacity":"0.3",d:"M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"},[]),h('path',{d:"M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"},[])]);
        }
    });
})();
</script>