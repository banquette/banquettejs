<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCompass3 = /* @__PURE__ */ ((_) => {
    return r('compass-3', {
        name: 'i-remix-compass-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m4.5-12.5L14 14l-6.5 2.5L10 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m4.5-14.5L10 10l-2.5 6.5L14 14zM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},[])]);
        }
    });
})();

export default IRemixCompass3;
</script>