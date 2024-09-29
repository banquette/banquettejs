<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLoader4 = /* @__PURE__ */ ((_) => {
    return r('loader-4', {
        name: 'i-remix-loader-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.364 5.636 16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364"},[])]);
        }
    });
})();

export default IRemixLoader4;
</script>