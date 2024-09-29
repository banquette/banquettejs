<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSpeaker3 = /* @__PURE__ */ ((_) => {
    return r('speaker-3', {
        name: 'i-remix-speaker-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5v14h14V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2m5-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},[])]);
return h('svg',{"viewBox":c ? '3 3 18 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12M6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"},[])]);
        }
    });
})();

export default IRemixSpeaker3;
</script>