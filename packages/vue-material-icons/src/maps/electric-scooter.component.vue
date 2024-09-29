<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialElectricScooter = /* @__PURE__ */ ((_) => {
    return r('electric-scooter', {
        name: 'i-material-electric-scooter',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 1 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74L17.49 1H12v2h3.89l1.4 6.25h-.01A6.01 6.01 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2M5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[]),h('path',{d:"M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-8 4H7l6 3v-2h4l-6-3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 1 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.01 2.01 0 0 0 15.89 1H13c-.55 0-1 .45-1 1s.45 1 1 1h2.89l1.4 6.25h-.01A6.01 6.01 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2M5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[]),h('path',{d:"M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-8 4H7l6 3v-2h4l-6-3z"},[])]);
return h('svg',{"viewBox":c ? '2 1 20 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M7.82 16H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.01 2.01 0 0 0 15.89 1H12v2h3.89l1.4 6.25h-.01A6.01 6.01 0 0 0 13.09 14H7.82a2.996 2.996 0 0 0-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 0 0 5 18c1.3 0 2.4-.84 2.82-2M5 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"},[]),h('path',{d:"M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-8 4H7l6 3v-2h4l-6-3z"},[])]);
        }
    });
})();

export default IMaterialElectricScooter;
</script>