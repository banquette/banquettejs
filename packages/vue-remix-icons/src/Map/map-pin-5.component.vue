<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixMapPin5 = /* @__PURE__ */ ((_) => {
    return r('map-pin-5', {
        name: 'i-remix-map-pin-5',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 18.485 4.243-4.242a6 6 0 1 0-8.486 0zm5.657-2.828L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z"},[])]);
return h('svg',{"viewBox":c ? '4 2 16 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M17.657 15.657 12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z"},[])]);
        }
    });
})();

export default IRemixMapPin5;
</script>