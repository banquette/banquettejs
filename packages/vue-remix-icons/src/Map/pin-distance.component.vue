<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixPinDistance = /* @__PURE__ */ ((_) => {
    return r('pin-distance', {
        name: 'i-remix-pin-distance',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1 20 22.28' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.975 8.975a3.5 3.5 0 1 0-4.95 0L7.5 11.45zM7.5 14.278 3.61 10.39a5.5 5.5 0 1 1 7.78 0L7.5 14.28zM7.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9 12.45 2.475-2.475a3.5 3.5 0 1 0-4.95 0zm3.89-1.06-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0zM16.5 17a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 22.28' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11.39 10.39 7.5 14.277 3.61 10.39a5.5 5.5 0 1 1 7.78 0M7.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12.89 10.89-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0zM16.5 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixPinDistance;
</script>