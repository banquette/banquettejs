<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCarWashing = /* @__PURE__ */ ((_) => {
    return r('car-washing', {
        name: 'i-remix-car-washing',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2.38 20 20.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V12l2.417-4.029A2 2 0 0 1 6.132 7h11.736a2 2 0 0 1 1.715.971L22 12v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm1-7H4v5h16zM4.332 12h15.336l-1.8-3H6.132zM5.44 3.44 6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0 1.06-1.062 1.06 1.06a1.5 1.5 0 1 1-2.121 0zM6.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},[])]);
return h('svg',{"viewBox":c ? '2 2.38 20 20.62' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.417-4.029A2 2 0 0 1 6.132 8h11.736a2 2 0 0 1 1.715.971L22 13v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM4.332 13h15.336l-1.8-3H6.132zM6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.44 3.44 6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0zm5.5 0 1.06-1.061 1.06 1.06a1.5 1.5 0 1 1-2.121 0z"},[])]);
        }
    });
})();

export default IRemixCarWashing;
</script>