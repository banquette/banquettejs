<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTrafficLight = /* @__PURE__ */ ((_) => {
    return r('traffic-light', {
        name: 'i-remix-traffic-light',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7 4V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1h3c0 2.5-2.5 3.5-3 3.5V10h3c0 2.5-2.5 3.5-3 3.5V16h3c0 2.5-2.5 3.5-3 3.5V21a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.5c-.5 0-3-1-3-3.5h3v-2.5c-.5 0-3-1-3-3.5h3V7.5c-.5 0-3-1-3-3.5zm5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixTrafficLight;
</script>