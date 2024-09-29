<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixShip2 = /* @__PURE__ */ ((_) => {
    return r('ship-2', {
        name: 'i-remix-ship-2',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '1 1 22.66 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74L19.637 18H19a6 6 0 0 1-1.535-.198L20.63 12H3.4l1.048 5.824A6 6 0 0 1 3 18h-.545l-1.24-6.821A1 1 0 0 1 2.197 10H3V5a1 1 0 0 1 1-1h1V1h4zm-4 6h11.392l-2.5-4H5zM3 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 11 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 19 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 11 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 3 22H1v-2z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22.66 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74l-3.937 7.217A4.99 4.99 0 0 1 15 16a5 5 0 0 1-4 2 5 5 0 0 1-4-2 4.99 4.99 0 0 1-4.55 1.97l-1.236-6.791A1 1 0 0 1 2.198 10H3V5a1 1 0 0 1 1-1h1V1h4zm-4 6h11.392l-2.5-4H5zM3 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 11 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 19 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 11 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 3 22H1v-2z"},[])]);
        }
    });
})();

export default IRemixShip2;
</script>