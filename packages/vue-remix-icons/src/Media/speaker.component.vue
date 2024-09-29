<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixSpeaker = /* @__PURE__ */ ((_) => {
    return r('speaker', {
        name: 'i-remix-speaker',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 4v16h14V4zM4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0-10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
        }
    });
})();

export default IRemixSpeaker;
</script>