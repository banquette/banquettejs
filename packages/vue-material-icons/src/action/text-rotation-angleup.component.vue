<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTextRotationAngleup = /* @__PURE__ */ ((_) => {
    return r('text-rotation-angleup', {
        name: 'i-material-text-rotation-angleup',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'round')
    return h('svg',{"viewBox":c ? '3.7 4.42 17.3 16.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m17.61 9.85.56.56-8.48 8.49a.996.996 0 1 0 1.41 1.41l8.49-8.49.56.56c.31.32.85.1.85-.34V9.5c0-.28-.22-.5-.5-.5h-2.54a.5.5 0 0 0-.35.85m-9.13 2.9 3.54-3.54 1.6.67c.36.15.77.07 1.05-.21a.958.958 0 0 0-.32-1.57L5.26 4.5c-.43-.16-.91-.06-1.23.26s-.42.8-.25 1.23l3.61 9.09c.25.64 1.08.81 1.57.32.28-.28.36-.69.21-1.05zm-.82-1.72L5.43 6.16l4.87 2.23z"},[])]);
if (v === 'outlined' || v === 'sharp' || v === 'twotone')
    return h('svg',{"viewBox":c ? '3.5 4.23 17.5 16.78' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.76 9 1.41 1.41-9.19 9.19 1.41 1.41 9.19-9.19L21 13.24V9zm-8.28 3.75 3.54-3.54 2.19.92 1.48-1.48L4.56 4.23 3.5 5.29l4.42 11.14 1.48-1.48zm-.82-1.72L5.43 6.16l4.87 2.23z"},[])]);
return h('svg',{"viewBox":c ? '3.43 4.21 17.14 16.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.49 4.21 3.43 5.27 7.85 16.4l1.48-1.48-.92-2.19 3.54-3.54 2.19.92 1.48-1.48zm3.09 6.8L5.36 6.14l4.87 2.23zm12.99-1.68h-4.24l1.41 1.41-8.84 8.84L10.32 21l8.84-8.84 1.41 1.41z"},[])]);
        }
    });
})();

export default IMaterialTextRotationAngleup;
</script>