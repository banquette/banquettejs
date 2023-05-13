<script>
import { h } from 'vue';
import { r } from "../utils.js";

export default /* @__PURE__ */ ((_) => {
    return r('mark-email-read', {
        name: 'i-material-mark-email-read',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 21 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 8v4.08c-.33-.05-.66-.08-1-.08-3.53 0-6.43 2.61-6.92 6H4V8l8 5 8-5zm0-2H4l8 5 8-5z","opacity":"0.3"},[]),h('path',{d:"M12.08 18H4V8l8 5 8-5v4.08c.71.1 1.38.31 2 .6V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1zM20 6l-8 5-8-5h16zm-2.66 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 21 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 19a6.995 6.995 0 0 1 10-6.32V4H2v16h10.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20.58 17.58' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M18.05 21.29a.996.996 0 0 1-1.41 0l-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.25zM12.08 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6.68A6.995 6.995 0 0 0 12 19c0 .34.03.67.08 1zm-.61-7.33c.32.2.74.2 1.06 0l7.07-4.42a.85.85 0 1 0-.9-1.44L12 11 5.3 6.81a.85.85 0 1 0-.9 1.44l7.07 4.42z"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 21 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm5.34 11-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"},[])]);
return h('svg',{"viewBox":c ? '2 4 21 18' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M12 19a6.995 6.995 0 0 1 10-6.32V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1zM4 6l8 5 8-5v2l-8 5-8-5V6zm13.34 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"},[])]);
        }
    });
})();
</script>