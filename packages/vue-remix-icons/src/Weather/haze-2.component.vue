<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHaze2 = /* @__PURE__ */ ((_) => {
    return r('haze-2', {
        name: 'i-remix-haze-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 7a5 5 0 0 1 0 10q-2.765 0-5-3.122Q9.765 17.001 7 17A5 5 0 0 1 7 7q2.765 0 5 3.122Q14.235 6.999 17 7M7 9a3 3 0 0 0 0 6c1.254 0 2.51-.875 3.759-2.854l.089-.147-.09-.145c-1.197-1.896-2.4-2.78-3.601-2.85zm10 0c-1.254 0-2.51.875-3.759 2.854l-.09.146.09.146c1.198 1.896 2.4 2.78 3.602 2.85L17 15a3 3 0 0 0 0-6m-5-7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 7a5 5 0 0 1 0 10q-2.765 0-5-3.122Q9.765 17.001 7 17A5 5 0 0 1 7 7q2.765 0 5 3.122Q14.235 6.999 17 7m-5-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M4.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m15 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"},[])]);
        }
    });
})();

export default IRemixHaze2;
</script>