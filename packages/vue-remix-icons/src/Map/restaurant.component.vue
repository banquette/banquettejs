<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixRestaurant = /* @__PURE__ */ ((_) => {
    return r('restaurant', {
        name: 'i-remix-restaurant',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6m-2 2.53C18.17 5 17 6.17 17 8v5h2zM9 13.9V22H7v-8.1A5 5 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5 5 0 0 1-4 4.9"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M21 2v20h-2v-8h-3V7a5 5 0 0 1 5-5M9 13.9V22H7v-8.1A5 5 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5 5 0 0 1-4 4.9"},[])]);
        }
    });
})();

export default IRemixRestaurant;
</script>