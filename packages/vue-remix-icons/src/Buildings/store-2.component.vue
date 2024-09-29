<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixStore2 = /* @__PURE__ */ ((_) => {
    return r('store-2', {
        name: 'i-remix-store-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 13.242V20h1v2H2v-2h1v-6.758A4.5 4.5 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242m-2 .73a4.5 4.5 0 0 1-3.75-1.36A4.5 4.5 0 0 1 12 14.001a4.5 4.5 0 0 1-3.25-1.387A4.5 4.5 0 0 1 5 13.973V20h14zM5.789 4 3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4z"},[])]);
return h('svg',{"viewBox":c ? '1 2 22 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 20v2H2v-2h1v-6.758A4.5 4.5 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242V20zM5.789 4 3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4z"},[])]);
        }
    });
})();

export default IRemixStore2;
</script>