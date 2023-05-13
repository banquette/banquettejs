<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('map-pin-time', {
        name: 'i-remix-map-pin-time',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM13 11h4v2h-6V6h2v5z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 21.73' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 11V6h-2v7h6v-2h-4zm5.364 6.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0z"},[])]);
        }
    });
})();
</script>