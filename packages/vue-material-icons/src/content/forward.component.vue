<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialForward = /* @__PURE__ */ ((_) => {
    return r('forward', {
        name: 'i-material-forward',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 14v1.17L17.17 12 14 8.83V10H6v4z","opacity":"0.3"},[]),h('path',{d:"m20 12-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12 14 15.17V14z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '4 5.41 15.59 13.18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8V6.41c0-.89 1.08-1.34 1.71-.71l5.59 5.59c.39.39.39 1.02 0 1.41l-5.59 5.59c-.63.63-1.71.19-1.71-.7V16H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M14 8.83 17.17 12 14 15.17V14H6v-4h8zM12 4v4H4v8h8v4l8-8z"},[])]);
return h('svg',{"viewBox":c ? '4 4 16 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 8V4l8 8-8 8v-4H4V8z"},[])]);
        }
    });
})();

export default IMaterialForward;
</script>