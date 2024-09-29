<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialRedo = /* @__PURE__ */ ((_) => {
    return r('redo', {
        name: 'i-material-redo',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '1.94 8 20.06 8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93-.32.67.04 1.47.75 1.71.59.2 1.23-.08 1.5-.64 1.3-2.66 4.03-4.5 7.19-4.5 1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71z"},[])]);
return h('svg',{"viewBox":c ? '1.54 7 20.46 9' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8 8 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7z"},[])]);
        }
    });
})();

export default IMaterialRedo;
</script>