<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('title', {
        name: 'i-material-title',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '5 4 14 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 7h5.5v12h3V7H19V4H5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '5 4 14 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 5.5C5 6.33 5.67 7 6.5 7h4v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7h4c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5z"},[])]);
if (v === 'outlined' || v === 'sharp')
    return h('svg',{"viewBox":c ? '5 4 14 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 4v3h5.5v12h3V7H19V4H5z"},[])]);
return h('svg',{"viewBox":c ? '5 4 14 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M5 4v3h5.5v12h3V7H19V4z"},[])]);
        }
    });
})();
</script>