<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('timer-10-select', {
        name: 'i-material-timer-10-select',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 8v8h-3V8h3m3-3H7v14h9V5zM1 8h2v11h3V5H1v3zm22 3h-6v5h4v1h-4v2h6v-5h-4v-1h4v-2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM2.5 8H3v9.5c0 .83.67 1.5 1.5 1.5S6 18.33 6 17.5V7c0-1.1-.9-2-2-2H2.5C1.67 5 1 5.67 1 6.5S1.67 8 2.5 8zm16 3c-.83 0-1.5.68-1.5 1.5v2c0 .82.67 1.5 1.5 1.5H21v1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H19v-1h3c.55 0 1-.45 1-1s-.45-1-1-1h-3.5z"},[])]);
return h('svg',{"viewBox":c ? '1 5 22 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM1 8h2v11h3V5H1v3zm17.5 3c-.83 0-1.5.68-1.5 1.5v2c0 .82.67 1.5 1.5 1.5H21v1h-4v2h4.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H19v-1h4v-2h-4.5z"},[])]);
        }
    });
})();
</script>