<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialFormatSize = /* @__PURE__ */ ((_) => {
    return r('format-size', {
        name: 'i-material-format-size',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '3 4 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 4 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 5.5c0 .83.67 1.5 1.5 1.5H14v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7h3.5c.83 0 1.5-.67 1.5-1.5S21.33 4 20.5 4h-10C9.67 4 9 4.67 9 5.5M4.5 12H6v5.5c0 .83.67 1.5 1.5 1.5S9 18.33 9 17.5V12h1.5c.83 0 1.5-.67 1.5-1.5S11.33 9 10.5 9h-6C3.67 9 3 9.67 3 10.5S3.67 12 4.5 12"},[])]);
return h('svg',{"viewBox":c ? '3 4 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z"},[])]);
        }
    });
})();

export default IMaterialFormatSize;
</script>