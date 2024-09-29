<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IRemixWheelchair = /* @__PURE__ */ ((_) => {
    return r('wheelchair', {
        name: 'i-remix-wheelchair',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '4 2 16.86 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 10.341v2.194A3.999 3.999 0 1 0 13.465 18h2.193A6.002 6.002 0 0 1 4 16a6 6 0 0 1 4-5.659M12 17a3 3 0 0 1-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 1 1 3.314.002A2.99 2.99 0 0 1 15 10v4.999l1.434.001a2 2 0 0 1 1.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17 15 16.999zm0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.999L13 10a1 1 0 0 0-1-1m0-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"},[])]);
return h('svg',{"viewBox":c ? '4 2 16.86 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8 10.341v2.194A3.999 3.999 0 1 0 13.465 18h2.193A6.002 6.002 0 0 1 4 16a6 6 0 0 1 4-5.659M12 17a3 3 0 0 1-3-3v-4a3 3 0 1 1 6 0v5h1.434a2 2 0 0 1 1.626.836l.089.135 2.708 4.515-1.714 1.028L16.433 17zm0-15a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5"},[])]);
        }
    });
})();

export default IRemixWheelchair;
</script>