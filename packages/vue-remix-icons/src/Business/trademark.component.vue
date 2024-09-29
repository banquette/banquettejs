<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTrademark = /* @__PURE__ */ ((_) => {
    return r('trademark', {
        name: 'i-remix-trademark',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '0 6 23 12' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 6v2H6v10H4V8H0V6zm2 0h2.5l3 5.196L20.5 6H23v12h-2V9.133l-3.5 6.063L14 9.135V18h-2z"},[])]);
        }
    });
})();

export default IRemixTrademark;
</script>