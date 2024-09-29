<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixTShirt = /* @__PURE__ */ ((_) => {
    return r('t-shirt', {
        name: 'i-remix-t-shirt',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '0.93 2.1 22.14 19.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.515 5 2.606-2.607a1 1 0 0 1 1.415 0l4.242 4.243a1 1 0 0 1 0 1.414L19 11.828V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9.172L1.222 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.415 0L9.485 5zm.828 2H8.657L6.172 4.515 3.343 7.343 7 11v9h10v-9l3.657-3.657-2.829-2.828z"},[])]);
return h('svg',{"viewBox":c ? '0.93 2.1 22.14 19.9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m14.515 5 2.606-2.607a1 1 0 0 1 1.415 0l4.242 4.243a1 1 0 0 1 0 1.414L19 11.828V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9.172L1.222 8.05a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.415 0L9.485 5z"},[])]);
        }
    });
})();

export default IRemixTShirt;
</script>