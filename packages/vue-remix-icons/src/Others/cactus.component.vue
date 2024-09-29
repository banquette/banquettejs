<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixCactus = /* @__PURE__ */ ((_) => {
    return r('cactus', {
        name: 'i-remix-cactus',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c2.21 0 4 1.79 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6c0 1.66-1.34 3-3 3h-1v3h2v2H6v-2h2v-6H7a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0v2c0 .55.45 1 1 1h1V6c0-2.21 1.79-4 4-4m0 2a2 2 0 0 0-2 2v14h4V6a2 2 0 0 0-2-2"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 2c2.21 0 4 1.79 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6a3 3 0 0 1-3 3h-1v3h2v2H6v-2h2v-6H7a3 3 0 0 1-3-3V9a1 1 0 0 1 2 0v2c0 .55.45 1 1 1h1V6c0-2.21 1.79-4 4-4"},[])]);
        }
    });
})();

export default IRemixCactus;
</script>