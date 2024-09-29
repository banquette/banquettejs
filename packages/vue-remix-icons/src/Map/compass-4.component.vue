<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCompass4 = /* @__PURE__ */ ((_) => {
    return r('compass-4', {
        name: 'i-remix-compass-4',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3.446-10.032-5.478 5.478a4 4 0 0 1-1.414-1.414l5.478-5.478a4 4 0 0 1 1.414 1.414"},[])]);
return h('svg',{"viewBox":c ? '2 2 20 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m3.446-12.032a4 4 0 0 0-1.414-1.414l-5.478 5.478a4 4 0 0 0 1.414 1.414z"},[])]);
        }
    });
})();

export default IRemixCompass4;
</script>