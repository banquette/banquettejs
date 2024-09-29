<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialForwardToInbox = /* @__PURE__ */ ((_) => {
    return r('forward-to-inbox', {
        name: 'i-material-forward-to-inbox',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M13 18H4V8l8 5 8-5v5h-2c-2.76 0-5 2.24-5 5m-1-7L4 6h16z","opacity":"0.3"},[]),h('path',{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 4 4 4-4 4v-3h-4v-2h4z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M22 4H2v16h11v-2H4V8l8 5 8-5v5h2zm-10 7L4 6h16zm7 4 4 4-4 4v-3h-4v-2h4z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20.79 18.29' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 5.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V20h-3c-.55 0-1-.45-1-1s.45-1 1-1h3z"},[])]);
return h('svg',{"viewBox":c ? '2 4 21 19' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 4 4 4-4 4v-3h-4v-2h4z"},[])]);
        }
    });
})();

export default IMaterialForwardToInbox;
</script>