<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixLoader5 = /* @__PURE__ */ ((_) => {
    return r('loader-5', {
        name: 'i-remix-loader-5',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '12 3 9 9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7z"},[])]);
        }
    });
})();

export default IRemixLoader5;
</script>