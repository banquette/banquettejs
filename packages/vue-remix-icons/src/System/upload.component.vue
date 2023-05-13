<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('upload', {
        name: 'i-remix-upload',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'line')
    return h('svg',{"viewBox":c ? '3 2 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"},[])]);
return h('svg',{"viewBox":c ? '3 2 18 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M3 19h18v2H3v-2zm10-9v8h-2v-8H4l8-8 8 8h-7z"},[])]);
        }
    });
})();
</script>