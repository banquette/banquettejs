<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('airplanemode-inactive', {
        name: 'i-material-airplanemode-inactive',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1.81 2 20.19 20.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 14.6c0 .7-.67 1.2-1.34 1.01l-3.15-.93-7.01-7.01V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l7.98 4.7c.32.18.52.53.52.9zm-8.5-1.1L9.56 9.56 3.51 3.51A.996.996 0 1 0 2.1 4.92l5.67 5.67-5.25 3.11c-.32.18-.52.53-.52.9 0 .7.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-.15.09-.24.26-.24.43v.58c0 .33.31.57.62.49l2.92-.73L12 21l.38.09.42.11 1.9.48.67.17c.32.08.62-.16.62-.49v-.58c0-.18-.09-.34-.24-.43L13.5 19v-2.67l5.57 5.57a.996.996 0 1 0 1.41-1.41L13.5 13.5z"},[])]);
return h('svg',{"viewBox":c ? '1.39 2 20.61 20.61' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10.5 7.67V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V9l8.5 5v2l-4.49-1.32-7.01-7.01zm9.28 14.94 1.41-1.41-7.69-7.7-3.94-3.94-6.75-6.75-1.42 1.41 6.38 6.38L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-2.67l6.28 6.28z"},[])]);
        }
    });
})();
</script>