<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSettings3 = /* @__PURE__ */ ((_) => {
    return r('settings-3', {
        name: 'i-remix-settings-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2.36 2 19.28 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3.34 17a10 10 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A10 10 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 10 10 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672A10 10 0 0 1 20.66 7c.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 10 10 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 10 10 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10 10 0 0 1 3.34 17m5.66.196a5 5 0 0 1 2.25 2.77q.75.071 1.499.001A5 5 0 0 1 15 17.197a5 5 0 0 1 3.525-.565q.435-.614.748-1.298A5 5 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8 8 0 0 0-.75-1.298A5 5 0 0 1 15 6.804a5 5 0 0 1-2.25-2.77q-.75-.071-1.499-.001A5 5 0 0 1 9 6.803a5 5 0 0 1-3.525.565 8 8 0 0 0-.748 1.298A5 5 0 0 1 6 12a5 5 0 0 1-1.273 3.334 8 8 0 0 0 .75 1.298A5 5 0 0 1 9 17.196M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
return h('svg',{"viewBox":c ? '2.5 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9.954 2.21a10 10 0 0 1 4.091-.002A4 4 0 0 0 16 5.07a4 4 0 0 0 3.457.261A10 10 0 0 1 21.5 8.876 4 4 0 0 0 20 12a3.99 3.99 0 0 0 1.502 3.124 10 10 0 0 1-2.046 3.543 4 4 0 0 0-3.456.261 4 4 0 0 0-1.954 2.86 10 10 0 0 1-4.091.004A4 4 0 0 0 8 18.927a4 4 0 0 0-3.457-.26A10 10 0 0 1 2.5 15.121 4 4 0 0 0 4 11.999a4 4 0 0 0-1.502-3.124 10 10 0 0 1 2.046-3.543A4 4 0 0 0 8 5.071a4 4 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"},[])]);
        }
    });
})();

export default IRemixSettings3;
</script>