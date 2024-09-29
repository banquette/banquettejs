<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCommand = /* @__PURE__ */ ((_) => {
    return r('command', {
        name: 'i-remix-command',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 1 1 10 6.5zM8 8V6.5A1.5 1.5 0 1 0 6.5 8zm0 8H6.5A1.5 1.5 0 1 0 8 17.5zm8-8h1.5A1.5 1.5 0 1 0 16 6.5zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5zm-6-6v4h4v-4z"},[])]);
        }
    });
})();

export default IRemixCommand;
</script>