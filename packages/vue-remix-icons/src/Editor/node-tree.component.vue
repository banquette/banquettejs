<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixNodeTree = /* @__PURE__ */ ((_) => {
    return r('node-tree', {
        name: 'i-remix-node-tree',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8v2h5V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H8v6h5v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H7a1 1 0 0 1-1-1V8H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm9 16h-4v2h4zm0-8h-4v2h4zM9 4H5v2h4z"},[])]);
        }
    });
})();

export default IRemixNodeTree;
</script>