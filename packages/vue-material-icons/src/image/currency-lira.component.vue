<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('currency-lira', {
        name: 'i-material-currency-lira',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '6 3 11.92 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m9 15.84-1.47.92A.998.998 0 0 1 6 15.91c0-.34.18-.66.47-.85L9 13.48v-2.36l-1.47.92A.998.998 0 0 1 6 11.19c0-.34.18-.66.47-.85L9 8.76V4c0-.55.45-1 1-1s1 .45 1 1v3.51l2.47-1.55a.998.998 0 0 1 1.53.85c0 .34-.18.66-.47.85L11 9.87l.01 2.35 2.46-1.54a.998.998 0 0 1 1.53.85c0 .34-.18.66-.47.85L11 14.59V19c2.47 0 4.52-1.79 4.93-4.15.08-.49.49-.85.98-.85.61 0 1.09.54 1 1.14A7.003 7.003 0 0 1 11 21h-1c-.55 0-1-.45-1-1v-4.16z"},[])]);
return h('svg',{"viewBox":c ? '6 3 12 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 8.76V3h2v4.51L15 5v2.36l-4 2.51.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36l3-1.88z"},[])]);
        }
    });
})();
</script>