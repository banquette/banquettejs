<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('text-fields', {
        name: 'i-material-text-fields',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.5 4 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2.5 4 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.5 5.5C2.5 6.33 3.17 7 4 7h3.5v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7H14c.83 0 1.5-.67 1.5-1.5S14.83 4 14 4H4c-.83 0-1.5.67-1.5 1.5zM20 9h-6c-.83 0-1.5.67-1.5 1.5S13.17 12 14 12h1.5v5.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V12H20c.83 0 1.5-.67 1.5-1.5S20.83 9 20 9z"},[])]);
return h('svg',{"viewBox":c ? '2.5 4 19 15' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"},[])]);
        }
    });
})();
</script>