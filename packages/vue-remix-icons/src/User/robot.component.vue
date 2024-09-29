<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRobot = /* @__PURE__ */ ((_) => {
    return r('robot', {
        name: 'i-remix-robot',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 4.055A9 9 0 0 1 21 13v9H3v-9a9 9 0 0 1 8-8.945V1h2zM19 20v-7a7 7 0 0 0-14 0v7zm-7-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2"},[])]);
return h('svg',{"viewBox":c ? '3 1 18 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 4.055A9 9 0 0 1 21 13v9H3v-9a9 9 0 0 1 8-8.945V1h2zM12 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"},[])]);
        }
    });
})();

export default IRemixRobot;
</script>