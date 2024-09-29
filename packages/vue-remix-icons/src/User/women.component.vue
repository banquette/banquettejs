<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixWomen = /* @__PURE__ */ ((_) => {
    return r('women', {
        name: 'i-remix-women',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4.51 1 15 23' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5zM12 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"},[])]);
return h('svg',{"viewBox":c ? '4.51 1 15 23' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5z"},[])]);
        }
    });
})();

export default IRemixWomen;
</script>