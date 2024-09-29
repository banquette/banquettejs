<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFlight = /* @__PURE__ */ ((_) => {
    return r('flight', {
        name: 'i-material-flight',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m10 19-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 19 19.84' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 14.58c0-.36-.19-.69-.49-.89L13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-7.51 4.69a1.05 1.05 0 0 0 .87 1.89L10 13.5V19l-1.8 1.35a.48.48 0 0 0-.2.4v.59c0 .33.32.57.64.48L11.5 21l2.86.82c.32.09.64-.15.64-.48v-.59a.48.48 0 0 0-.2-.4L13 19v-5.5l6.64 2.08c.68.21 1.36-.3 1.36-1"},[])]);
return h('svg',{"viewBox":c ? '2 2 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"},[])]);
        }
    });
})();

export default IMaterialFlight;
</script>