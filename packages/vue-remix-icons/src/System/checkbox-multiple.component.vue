<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCheckboxMultiple = /* @__PURE__ */ ((_) => {
    return r('checkbox-multiple', {
        name: 'i-remix-checkbox-multiple',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9zm6 2H4.003L4 20h11zm-6.497 9-3.536-3.536 1.414-1.414 2.122 2.122 4.242-4.243 1.414 1.414z"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9zm-.497 11 5.656-5.657-1.414-1.414-4.242 4.243L6.38 13.05l-1.414 1.414z"},[])]);
        }
    });
})();

export default IRemixCheckboxMultiple;
</script>