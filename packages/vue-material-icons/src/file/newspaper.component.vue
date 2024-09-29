<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialNewspaper = /* @__PURE__ */ ((_) => {
    return r('newspaper', {
        name: 'i-material-newspaper',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 3-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v18h20zM11 19H4v-6h7zm9 0h-7v-2h7zm0-4h-7v-2h7zm0-4H4V8h16z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 3.42 20 17.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m21.15 3.85-.82.82-.95-.96c-.39-.39-1.02-.39-1.42 0l-.96.96-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96-.96-.96a.996.996 0 0 0-1.41 0l-.96.96-.96-.96c-.39-.39-1.02-.39-1.42 0L7 4.67l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96-.82-.82a.5.5 0 0 0-.85.36V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4.21a.5.5 0 0 0-.85-.36M11 19H4v-6h7zm9 0h-7v-2h7zm0-4h-7v-2h7zm0-4H4V8h16z"},[])]);
return h('svg',{"viewBox":c ? '2 3 20 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m22 3-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM11 19H4v-6h7zm9 0h-7v-2h7zm0-4h-7v-2h7zm0-4H4V8h16z"},[])]);
        }
    });
})();

export default IMaterialNewspaper;
</script>