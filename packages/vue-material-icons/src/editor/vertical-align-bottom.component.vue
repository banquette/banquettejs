<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('vertical-align-bottom', {
        name: 'i-material-vertical-align-bottom',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14.79 13H13V4c0-.55-.45-1-1-1s-1 .45-1 1v9H9.21c-.45 0-.67.54-.35.85l2.79 2.79c.2.2.51.2.71 0l2.79-2.79a.5.5 0 0 0-.36-.85zM4 20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1z"},[])]);
return h('svg',{"viewBox":c ? '4 3 16 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"},[])]);
        }
    });
})();
</script>