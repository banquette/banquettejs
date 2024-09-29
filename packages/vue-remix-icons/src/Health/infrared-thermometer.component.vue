<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixInfraredThermometer = /* @__PURE__ */ ((_) => {
    return r('infrared-thermometer', {
        name: 'i-remix-infrared-thermometer',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2v9h-3.001L18 12c0 2.21-1.79 4-4 4h-1.379l-.613 3.111.911 1.321A1 1 0 0 1 12.096 22H3l2.313-10.024L3 11l4-9zm-2 2H8.3L5.655 9.95l1.985.837L5.514 20h4.678l-.309-.448L11.96 9H19zm-3.001 7h-2.394l-.591 3H14a2 2 0 0 0 2-2z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2v9h-3.001L18 12c0 2.21-1.79 4-4 4h-1.379l-.613 3.111.911 1.321A1 1 0 0 1 12.096 22H3l2.313-10.024L3 11l4-9zm-5.001 9h-2.394l-.591 3H14a2 2 0 0 0 2-2z"},[])]);
        }
    });
})();

export default IRemixInfraredThermometer;
</script>