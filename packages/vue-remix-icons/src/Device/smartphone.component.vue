<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSmartphone = /* @__PURE__ */ ((_) => {
    return r('smartphone', {
        name: 'i-remix-smartphone',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 4v16h10V4zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2"},[])]);
return h('svg',{"viewBox":c ? '5 2 14 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m6 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2"},[])]);
        }
    });
})();

export default IRemixSmartphone;
</script>