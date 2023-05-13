<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('cloudy-snowing', {
        name: 'i-material-cloudy-snowing',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '2 2 20 21' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 18c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm12 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm-9 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3-4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3.5-6h-10A5.51 5.51 0 0 1 2 10.5c0-2.76 2.09-5.09 4.78-5.44A5.975 5.975 0 0 1 12 2c2.97 0 5.45 2.18 5.92 5.02A4.5 4.5 0 0 1 22 11.5c0 2.48-2.02 4.5-4.5 4.5z"},[])]);
        }
    });
})();
</script>