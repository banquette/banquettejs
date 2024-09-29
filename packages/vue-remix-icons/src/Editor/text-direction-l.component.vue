<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTextDirectionL = /* @__PURE__ */ ((_) => {
    return r('text-direction-l', {
        name: 'i-remix-text-direction-l',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '5 3 16 18.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 5v10H9v-4a4 4 0 1 1 0-8h8v2h-2v10h-2V5zM9 5a2 2 0 1 0 0 4zm8 12v-2.5l4 3.5-4 3.5V19H5v-2z"},[])]);
        }
    });
})();

export default IRemixTextDirectionL;
</script>