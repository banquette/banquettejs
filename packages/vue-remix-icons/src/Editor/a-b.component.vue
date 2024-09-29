<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixAB = /* @__PURE__ */ ((_) => {
    return r('a-b', {
        name: 'i-remix-a-b',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 19.4 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 0 1-4-4v-2zm13-5 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10zm-1 2.885L15.753 16h2.492zM3 3h6a3 3 0 0 1 2.235 5A3 3 0 0 1 9 13H3zm6 6H5v2h4a1 1 0 0 0 0-2m8-6a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3zM9 5H5v2h4a1 1 0 1 0 0-2"},[])]);
        }
    });
})();

export default IRemixAB;
</script>