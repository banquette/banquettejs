<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixHotelBed = /* @__PURE__ */ ((_) => {
    return r('hotel-bed', {
        name: 'i-remix-hotel-bed',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4m-2 3v-3a2 2 0 0 0-2-2h-4v5zM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6"},[])]);
        }
    });
})();

export default IRemixHotelBed;
</script>