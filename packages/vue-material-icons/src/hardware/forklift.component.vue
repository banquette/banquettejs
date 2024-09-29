<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialForklift = /* @__PURE__ */ ((_) => {
    return r('forklift', {
        name: 'i-material-forklift',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            return h('svg',{"viewBox":c ? '1 3 22 17' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 17v2h-5V3h2v14zm-6.27-1.85c.17.42.27.87.27 1.35 0 1.93-1.57 3.5-3.5 3.5-1.4 0-2.6-.82-3.16-2H6.83A2.99 2.99 0 0 1 4 20c-1.66 0-3-1.34-3-3 0-.89.39-1.69 1-2.24V10h2V4h8zM5 17c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m8.65-4-2.97-7H6v4l2.92 3zM15 16.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5"},[])]);
        }
    });
})();

export default IMaterialForklift;
</script>