<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixEmotionLaugh = /* @__PURE__ */ ((_) => {
    return r('emotion-laugh', {
        name: 'i-remix-emotion-laugh',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 7q3 0 5 1a5 5 0 0 1-10 0q2-1 5-1M8.5 7a2.5 2.5 0 0 1 2.45 2h-4.9A2.5 2.5 0 0 1 8.5 7m7 0a2.5 2.5 0 0 1 2.45 2h-4.9a2.5 2.5 0 0 1 2.45-2"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 9q-3 0-5 1a5 5 0 0 0 10 0q-2-1-5-1M8.5 7c-1.152 0-2.122.78-2.412 1.84L6.05 9h4.9A2.5 2.5 0 0 0 8.5 7m7 0c-1.152 0-2.122.78-2.412 1.84L13.05 9h4.9a2.5 2.5 0 0 0-2.45-2"},[])]);
        }
    });
})();

export default IRemixEmotionLaugh;
</script>