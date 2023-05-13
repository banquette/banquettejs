<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('work-off', {
        name: 'i-material-work-off',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '1.99 1.84 21.16 21.16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4 8v11h13.74l-11-11zm8.4 0 7.6 7.6V8z","opacity":"0.3"},[]),h('path',{d:"M10 4h4v2h-3.6l2 2H20v7.6l2 2V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4zM3.4 1.84 1.99 3.25 4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l2 2 1.41-1.41L3.4 1.84zM4 19V8h2.74l11 11H4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '1.99 1.84 21.16 21.16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4h4v2h-3.6L22 17.6V6h-6V4c0-1.1-.9-2-2-2h-4c-.98 0-1.79.71-1.96 1.64L10 5.6V4zM3.4 1.84 1.99 3.25 4.74 6H2.01L2 21h17.74l2 2 1.41-1.41z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 2 20.73 20.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M4.11 2.54A.996.996 0 1 0 2.7 3.95L4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l1.29 1.29a.996.996 0 1 0 1.41-1.41L4.11 2.54zM10 4h4v2h-3.6L22 17.6V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '1.99 1.84 21.16 21.16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M10 4h4v2h-3.6l2 2H20v7.6l2 2V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4zM3.4 1.84 1.99 3.25 4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l2 2 1.41-1.41L3.4 1.84zM4 19V8h2.74l11 11H4z"},[])]);
return h('svg',{"viewBox":c ? '1.99 1.99 21.01 21.01' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m23 21.74-1.46-1.46L7.21 5.95 3.25 1.99 1.99 3.25l2.7 2.7h-.64c-1.11 0-1.99.89-1.99 2l-.01 11c0 1.11.89 2 2 2h15.64L21.74 23 23 21.74zM22 7.95c.05-1.11-.84-2-1.95-1.95h-4V3.95c0-1.11-.89-2-2-1.95h-4c-1.11-.05-2 .84-2 1.95v.32l13.95 14V7.95zM14.05 6H10V3.95h4.05V6z"},[])]);
        }
    });
})();
</script>