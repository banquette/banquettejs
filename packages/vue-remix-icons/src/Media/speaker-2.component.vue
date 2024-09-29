<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSpeaker2 = /* @__PURE__ */ ((_) => {
    return r('speaker-2', {
        name: 'i-remix-speaker-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0-4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"},[])]);
        }
    });
})();

export default IRemixSpeaker2;
</script>