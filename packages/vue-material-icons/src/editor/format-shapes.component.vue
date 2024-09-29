<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFormatShapes = /* @__PURE__ */ ((_) => {
    return r('format-shapes', {
        name: 'i-material-format-shapes',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 3h2v2H3zm16 16h2v2h-2zm0-16h2v2h-2zM3 19h2v2H3z","opacity":"0.3"},[]),h('path',{d:"m11.29 7-3.4 9h1.62l.73-2h3.49l.74 2h1.63l-3.41-9zm-.6 5.74L12 8.91l1.3 3.83zM17 3H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2V1h-6zM3 3h2v2H3zm2 18H3v-2h2zm16 0h-2v-2h2zM19 3h2v2h-2zm0 14h-2v2H7v-2H5V7h2V5h10v2h2z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 6V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1H7V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h1v10H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-1V7h1c.55 0 1-.45 1-1M3 3h2v2H3zm2 18H3v-2h2zm12-2H7v-1c0-.55-.45-1-1-1H5V7h1c.55 0 1-.45 1-1V5h10v1c0 .55.45 1 1 1h1v10h-1c-.55 0-1 .45-1 1zm4 2h-2v-2h2zM19 5V3h2v2zm-6.06 2.65a1.02 1.02 0 0 0-.95-.65c-.42 0-.8.26-.94.65l-2.77 7.33c-.19.49.17 1.02.7 1.02.32 0 .6-.2.71-.5l.55-1.5h3.49l.56 1.51c.11.29.39.49.71.49h.01c.53 0 .89-.53.71-1.02zm-2.25 5.09L12 8.91l1.3 3.83z"},[])]);
return h('svg',{"viewBox":c ? '1 1 22 22' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7zM3 3h2v2H3zm2 18H3v-2h2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2zm4 2h-2v-2h2zM19 5V3h2v2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63zm-3.04-1.26h2.61L12 8.91z"},[])]);
        }
    });
})();

export default IMaterialFormatShapes;
</script>