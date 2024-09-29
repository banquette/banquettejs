<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNpmjs = /* @__PURE__ */ ((_) => {
    return r('npmjs', {
        name: 'i-remix-npmjs',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v14h14zm-2 2v10h-2.5V9.5H12V17H7V7z"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 4H7v10h5V9.5h2.5V17H17z"},[])]);
        }
    });
})();

export default IRemixNpmjs;
</script>