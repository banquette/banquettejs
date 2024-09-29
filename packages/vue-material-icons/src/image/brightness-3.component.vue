<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialBrightness3 = /* @__PURE__ */ ((_) => {
    return r('brightness-3', {
        name: 'i-material-brightness-3',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '6 2 13 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.7 4.91c1.46 2 2.3 4.46 2.3 7.09s-.84 5.09-2.3 7.09A8 8 0 0 0 17 12a8 8 0 0 0-4.3-7.09","opacity":"0.3"},[]),h('path',{d:"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2m3.7 17.09c1.46-2 2.3-4.46 2.3-7.09s-.84-5.09-2.3-7.09A8 8 0 0 1 17 12a8 8 0 0 1-4.3 7.09"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '8 2 11.03 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M8.93 2h-.14c-.83.02-1.09 1.12-.39 1.56A10 10 0 0 1 13.03 12c0 3.55-1.84 6.66-4.62 8.43-.71.46-.43 1.55.41 1.57h.21c6.05 0 10.86-5.39 9.87-11.63-.76-4.84-5.07-8.42-9.97-8.37"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '6 2 13 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.7 4.91A8 8 0 0 1 17 12a8 8 0 0 1-4.3 7.09c1.46-2 2.3-4.46 2.3-7.09s-.84-5.09-2.3-7.09M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2"},[])]);
return h('svg',{"viewBox":c ? '6 2 13 20' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54s-2.94 8.27-7 9.54c.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2"},[])]);
        }
    });
})();

export default IMaterialBrightness3;
</script>