<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixKnife = /* @__PURE__ */ ((_) => {
    return r('knife', {
        name: 'i-remix-knife',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 1.41 20.81 20.59' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.342 1.408 22.373 19.44a1.5 1.5 0 0 1-2.121 2.122l-4.596-4.597L12.12 20.5l-7.778-7.778a8 8 0 0 1-.174-11.135zm.241 3.07-.051.11a6 6 0 0 0 1.047 6.535l.177.185 6.363 6.363 2.829-2.828z"},[])]);
return h('svg',{"viewBox":c ? '2 1.41 20.78 20.56' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22.373 19.44a1.5 1.5 0 0 1-2.121 2.12l-4.596-4.596L12.12 20.5l-7.778-7.778a8 8 0 0 1-.174-11.135l.174-.179z"},[])]);
        }
    });
})();

export default IRemixKnife;
</script>