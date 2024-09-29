<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterial60fps = /* @__PURE__ */ ((_) => {
    return r('60fps', {
        name: 'i-material-60fps',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 8v8h-4V8zm3-3H12v14h10zM10 8V5H2v14h9v-9H5V8zm-2 5v3H5v-3z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 8v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3m-9 1.5C10 5.67 9.33 5 8.5 5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8h3.5c.83 0 1.5-.67 1.5-1.5M8 13v3H5v-3z"},[])]);
return h('svg',{"viewBox":c ? '2 5 20 14' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M19 8v8h-4V8zm0-3h-4c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3m-9 3V5H5C3.34 5 2 6.34 2 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3v-3c0-1.66-1.34-3-3-3H5V8zm-2 5v3H5v-3z"},[])]);
        }
    });
})();

export default IMaterial60fps;
</script>