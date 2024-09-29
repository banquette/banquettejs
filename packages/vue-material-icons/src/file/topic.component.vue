<script>
import { h } from 'vue';
import { r } from "../utils.js";

const IMaterialTopic = /* @__PURE__ */ ((_) => {
    return r('topic', {
        name: 'i-material-topic',
        props: ['width', 'height', 'color', 'crop', 'version'],
        render() {
            let w = this.width, s = this.height || (!this.width ? '1em' : null),f=this.color || 'currentColor',v = this.version,c = this.crop !== undefined;
            if (v === 'twotone')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 18H4V6h5.17l2 2H20zm-2-6H6v-2h12zm-4 4H6v-2h8z","opacity":"0.3"},[]),h('path',{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16.77c.68 0 1.23-.56 1.23-1.23V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2-6H6v-2h12zm-4 4H6v-2h8z"},[])]);
if (v === 'sharp')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"m12 6-2-2H2v16h20V6zm2 10H6v-2h8zm4-4H6v-2h12z"},[])]);
if (v === 'round')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-8l-1.41-1.41C10.21 4.21 9.7 4 9.17 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7 10H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m4-4H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"},[])]);
if (v === 'outlined')
    return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16.77c.68 0 1.23-.56 1.23-1.23V8c0-1.1-.9-2-2-2m0 12H4V6h5.17l2 2H20zm-2-6H6v-2h12zm-4 4H6v-2h8z"},[])]);
return h('svg',{"viewBox":c ? '2 4 20 16' : '0 0 24 24',"width":w,"height":s,"fill":f},[h('path',{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6 10H6v-2h8zm4-4H6v-2h12z"},[])]);
        }
    });
})();

export default IMaterialTopic;
</script>