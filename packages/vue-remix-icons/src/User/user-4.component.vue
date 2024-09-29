<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixUser4 = /* @__PURE__ */ ((_) => {
    return r('user-4', {
        name: 'i-remix-user-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 20h14v2H5zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 20h14v2H5zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16"},[])]);
        }
    });
})();

export default IRemixUser4;
</script>