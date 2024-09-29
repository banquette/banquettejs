<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixFlightTakeoff = /* @__PURE__ */ ((_) => {
    return r('flight-takeoff', {
        name: 'i-remix-flight-takeoff',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '1.47 4.04 20.53 16.96' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.478 11.632 5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445zM4 19h16v2H4z"},[])]);
        }
    });
})();

export default IRemixFlightTakeoff;
</script>