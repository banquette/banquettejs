<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('near-me-disabled', {
        name: 'i-material-near-me-disabled',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2.81 1.4 19.79 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m16.1 10.44 1.5-4.05-4.05 1.5 2.55 2.55zm-1.53 4.13L9.43 9.43l-2.71 1.01 4.89 1.95 1.95 4.89 1.01-2.71z","opacity":"0.3"},[]),h('path',{d:"M12 6.34 21 3l-3.34 9-1.56-1.56 1.5-4.05-4.05 1.5L12 6.34zm9.19 14.85-5.07-5.07L14.31 21H12.9l-2.83-7.07L3 11.1V9.69l4.88-1.81-5.07-5.07L4.22 1.4 22.6 19.78l-1.41 1.41zm-6.62-6.62L9.43 9.43l-2.71 1.01 4.89 1.95 1.95 4.89 1.01-2.71z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '3 1.81 19.19 19.19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 6.34 6.95-2.58c.8-.3 1.58.48 1.29 1.29L17.66 12 12 6.34zm9.9 12.73L4.93 2.1a.996.996 0 1 0-1.41 1.41l4.36 4.36-4.2 1.56c-.41.16-.68.54-.68.97 0 .42.26.8.65.96l6.42 2.57 2.57 6.42c.16.39.54.65.96.65.43 0 .82-.27.97-.67l1.56-4.2 4.36 4.36c.39.39 1.02.39 1.41 0 .39-.4.39-1.03 0-1.42z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2.81 1.4 19.79 19.79' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 6.34 21 3l-3.34 9-1.56-1.56 1.5-4.05-4.05 1.5L12 6.34zm9.19 14.85-5.07-5.07L14.31 21H12.9l-2.83-7.07L3 11.1V9.69l4.88-1.81-5.07-5.07L4.22 1.4 22.6 19.78l-1.41 1.41zm-6.62-6.62L9.43 9.43l-2.71 1.01 4.89 1.95 1.95 4.89 1.01-2.71z"},[])]);
return h('svg',{"viewBox":c ? '2.81 1.39 19.8 19.8' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 6.34 21 3l-3.34 9L12 6.34zm10.61 13.44L4.22 1.39 2.81 2.81l5.07 5.07L3 9.69v1.41l7.07 2.83L12.9 21h1.41l1.81-4.88 5.07 5.07 1.42-1.41z"},[])]);
        }
    });
})();
</script>