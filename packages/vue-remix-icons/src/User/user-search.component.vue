<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixUserSearch = /* @__PURE__ */ ((_) => {
    return r('user-search', {
        name: 'i-remix-user-search',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 1 18.95 21.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m9.446 9.032 1.504 1.504-1.414 1.414-1.504-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
return h('svg',{"viewBox":c ? '4 1 18.95 21.95' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m9.446 7.032 1.504 1.504-1.414 1.414-1.504-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixUserSearch;
</script>