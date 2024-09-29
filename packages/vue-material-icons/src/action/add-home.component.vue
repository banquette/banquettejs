<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialAddHome = /* @__PURE__ */ ((_) => {
    return r('add-home', {
        name: 'i-material-add-home',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 3 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 5.5 6 10v9h5.08c-.62-4.3 2.72-8 6.92-8v-1z","opacity":"0.3"},[]),h('path',{d:"M6 19v-9l6-4.5 6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68c-.3-.62-.5-1.29-.6-2z"},[]),h('path',{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 3.5 19 19.5' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16.53 11.16c1.23-.26 2.4-.18 3.47.14V10c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0l-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h5.68a6.9 6.9 0 0 1-.55-4.35c.52-2.72 2.69-4.91 5.4-5.49"},[]),h('path',{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 3 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 5.5 6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68c-.3-.62-.5-1.29-.6-2H6v-9z"},[]),h('path',{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"},[])]);
return h('svg',{"viewBox":c ? '4 3 19 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18 11c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68A6.995 6.995 0 0 1 18 11"},[]),h('path',{d:"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21z"},[])]);
        }
    });
})();

export default IMaterialAddHome;
</script>